// import React from 'react';
import styles from '@/CSS/Footer.module.css';

const Footer = () => (
  <>
    <div className={styles.footer}>
      <div className={styles.bubbles}>
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className={styles.bubble}
            style={
              {
                "--size": `${2 + Math.random() * 4}rem`,
                "--distance": `${6 + Math.random() * 4}rem`,
                "--position": `${-5 + Math.random() * 100}%`,
                "--time": `${3 + Math.random() * 2}s`,
                "--delay": `${-1 * (2 + Math.random() * 2)}s`,
              } as any
            }
          />
        ))}
      </div>

      {/* Footer content start  */}
      <div className="bg-primary z-50 flex p-10 ">
        <div className="w-[50%] flex flex-col p-10">
            <div className='' >
                   <p className='text-4xl text-secondary font-semibold mb-5'>تابعنا</p> 
                    <div className='flex gap-10'>
                            <a href="#">1</a>
                            <a href="#">1</a>
                            <a href="#">1</a>
                            <a href="#">1</a>
                    </div>
            </div>
            <div className='' >
                   <p className='text-4xl text-secondary font-semibold mb-5'>تواصل معنا</p> 
                    <div className='flex gap-10'>
                            <a href="#">1</a>
                            <a href="#">1</a>
                            <a href="#">1</a>
                            <a href="#">1</a>
                    </div>
            </div>
            <div className='' >
                   <p className='text-4xl text-secondary font-semibold mb-5'> سجل في نشرتنا الأخبارية</p> 
                    <div className='flex  w-fit h-[40px]  border-[2px]  border-[#4C4C6D]'>
                        <button className='bg-secondary font-bold text-xl w-[100px] hover:bg-primary hover:text-secondary hover:text-2xl ' >أرسال</button>
                        <input type="email" name="" id=""className='w-[300px]' />
                    </div>
            </div>
        </div>
        <div className="w-[25%] flex border-x-[2px] border-body-color">أختصارات</div>
        <div className="w-[50%] content-center text-center p-10 ">
          <div className="text-8xl h-[50%] font-bold ">
            <a href="#">
              <span className="text-secondary ">First-</span>
              <span className="text-body-color ">Road</span>
            </a>
          </div>
          <div className="text-5xl h-[30%] font-bold">
            <p className="">
              <span className="text-secondary"> بخطوات </span>
              <span className="text-body-color">واثقة نضمن لك النجاح</span>
            </p>
          </div>
        </div>
      </div>

      <svg style={{ position: "fixed", top: "100vh" }}>
        <defs>
          <filter id="blob">
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="10"
              result="blur"
            />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
              result="blob"
            />
          </filter>
        </defs>
      </svg>
    </div>
    <div className="bg-secondary text-center h-14 p-5">
      <p className="font-bold">©2015 First-Road</p>
    </div>
  </>
);

export default Footer;
