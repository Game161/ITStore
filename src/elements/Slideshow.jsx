import React, { useState, useEffect } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
const Slideshow = () => {
  const slides = [
    {
      url: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2620&q=80",
    },
    {
      url: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80",
    },
    {
      url: "https://images.unsplash.com/photo-1661961112951-f2bfd1f253ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2672&q=80",
    },

    {
      url: "https://images.unsplash.com/photo-1512756290469-ec264b7fbf87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2253&q=80",
    },
    {
      url: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2671&q=80",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };
  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval); // ล้าง interval เมื่อ component ถูก unmount หรือ currentIndex เปลี่ยน
  }, [currentIndex]); // เพิ่ม currentIndex เป็น dependency
  return (
    <div className="h-screen w-full relative group">
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className="w-full h-full bg-center bg-cover duration-500 shadow-inner"
      ></div>
      {/* Left Arrow */}
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      {/* Right Arrow */}
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
      <div className="lg:flex justify-center py-2 absolute top-[95%] left-[46%] sm:hidden">
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className="text-2xl cursor-pointer"
          >
            <span className="progress"></span>
            <div className="rhombus1 step4 ml-2 bg-slate-200"></div>
          </div>
        ))}
      </div>

      {/* e.prototype.mounted = function(){
                t = this;
                window.addEventListener("resize", (function() {
                    t.checkMobileStatus()
                }
                )),
                this.checkMobileStatus(),
                setTimeout((function() {
                    t.nowPointNumber = 0,
                    t.autoSlideShowHandler(),
                    t.progressBarHandler()
                }
                ), 1500),
                this.defaultX = window.innerWidth / 2
              }
            ,
            e.prototype.progressBarHandler = function() {
                t = this;
                this.progressTimer = 0,
                this.slideController = !0,
                this.progressTime = this.randomTime / 100,
                this.progressPercent = 0,
                this.progressTimer = setInterval((function() {
                    !0 === t.slideController && t.progressPercent < 100 && t.progressPercent++,
                    t.progressPercent >= 100 ? clearInterval(t.progressTimer) : t.progressTimer = null
                }
                ), this.progressTime)
            }
            ,
            e.prototype.reAutoHandler = function() {
                t = this;
                this.reAutoInterval = setInterval((function() {
                    t.reAutoStatus && (t.autoSlideShowHandler(),
                    t.reAutoStatus = !1)
                }
                ), 0)
            }
            ,
            e.prototype.autoSlideShowHandler = function() {
                t = this
                  , e = Object.keys(this.banner).length;
                this.autoStatus = setInterval((function() {
                    1 === t.bannerLength && (clearInterval(t.autoStatus),
                    clearInterval(t.progressTimer),
                    t.reAutoStatus = !1,
                    t.slideController = !1),
                    t.nowPointNumber === e - 1 ? (t.moveDelta = 0,
                    t.nowNumber = 0,
                    t.nowPointNumber = t.nowNumber,
                    t.progressBarHandler(),
                    clearInterval(t.progressTimer)) : (t.moveDelta = t.moveDelta - 100,
                    t.nowNumber++,
                    t.nowPointNumber = t.nowNumber,
                    t.progressBarHandler(),
                    clearInterval(t.progressTimer))
                }
                ), this.randomTime)
            }
            e.prototype.switchSlide = function() {
                this.isShowPlayButton ? this.playSlide() : this.pauseSlide()
            }
            ,
            e.prototype.playSlide = function() {
                this.reAutoHandler(),
                this.reAutoStatus = !0,
                this.slideController = !0,
                this.isShowPlayButton = !1
            }
            ,
            e.prototype.pauseSlide = function() {
                clearInterval(this.autoStatus),
                this.reAutoStatus = !1,
                this.slideController = !1,
                this.isShowPlayButton = !0
            } */}
    </div>
  );
};

export default Slideshow;
