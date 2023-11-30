import Image from 'next/image'
import './page.scss'
export default function Home() {
  return (
    <main className="main">
      <div className='content'>
        <header className='header contentMaxWidth'>
          <div>
            <Image alt='logo' priority={true} width={120} height={120} src={'/logo.png'} />
          </div>
        </header>

        <section className='lookingFor contentMaxWidth'>
          <h3 className='title'>Are you looking for</h3>
          <div className='options flex ' >
            <ul className='selection left'>
              <div className='relative mb-[40px]'>
                <Image alt='logo' priority={true} width={120} height={120} src={'/logo.png'} />
                <p className='w-[120px] absolute bottom-[-11%] left-[53%] italic'>Cloud gaming</p>
              </div>
              <li>Play game on any devices</li>
              <li>From 10$ per month</li>
              <li>Play game instantly</li>
              <li>Available in Vietnam</li>
            </ul>
            <ul className='selection right'>
              <div className='relative mb-[40px]'>
                <Image alt='logo' priority={true} width={120} height={120} src={'/logo.png'} />
                <p className='w-[120px] absolute bottom-[-11%] left-[53%] italic'>enterprise</p>
              </div>
              <li>Consultant CloudPc/gaming service</li>
              <li>Browser application</li>
              <li>Streaming protocol</li>
              <li>Virtualization technology</li>
            </ul>
          </div>
        </section>

        <section className='enterprise'>
          <div className='introduce contentMaxWidth '>
            <div className="left">
              <div className='content'>
                <div>
                  <h3 className='font-bold text-[5rem] text-white'>Cloud gaming <br />  4k120fps 60ms?</h3>
                  <p className='text-white text-[30px]'>
                    Are you building application which have
                    ultra low latency?
                  </p>
                  <a href="">Let us help you</a>
                </div>
              </div>
              <div className='content'>
                <div>
                  <h3 className='font-bold text-[5rem] text-white'>Cloud gaming <br />  4k120fps 60ms?</h3>
                  <ul className='flex items-start gap-[8px] mt-[80px]'>
                    <li>Virtual machine?</li>
                    <li>Virtual machine?</li>
                    <li>Virtual machine?</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="right">
              <div className='content z-10'>
                <Image src={'/macbook.png'} alt='' priority={true} width={500} height={500} />
              </div>

              <div className='content z-10'>
                <Image alt='logo' priority={true} width={500} height={120} src={'/server1.png'} />
              </div>
              <div className='stick'>
              </div>
            </div>



          </div>

          <div className='detail contentMaxWidth'>
            <div className='mainContent'>
              <div className='left'>
                <div className="content">
                  <div>
                    <h3 className='title'>Streaming application</h3>
                    <ul className='ctnText'>
                      <li className='text'>NextJS and ReactJS expert</li>
                      <li className='text'>NextJS and ReactJS expert</li>
                      <li className='text'>NextJS and ReactJS expert</li>
                    </ul>
                  </div>
                </div>

                <div className="content">
                  <div>
                    <h3 className='title'>Streaming protocol</h3>
                    <ul className='ctnText'>
                      <li className='text'>NextJS and ReactJS expert</li>
                      <li className='text'>NextJS and ReactJS expert</li>
                      <li className='text'>NextJS and ReactJS expert</li>
                    </ul>
                  </div>
                </div>

                <div className="content">
                  <div>
                    <h3 className='title'>Virtualization infrastructure </h3>
                    <ul className='ctnText'>
                      <li className='text'>NextJS and ReactJS expert</li>
                      <li className='text'>NextJS and ReactJS expert</li>
                      <li className='text'>NextJS and ReactJS expert</li>
                    </ul>
                  </div>
                </div>
              </div>


              <div className='right'>
                <div className='z-10 content'>
                  <Image alt='logo' priority={true} width={500} height={120} src={'/server1.png'} />
                </div>
                <div className="content">

                </div>
                <div className='z-10 content'>
                  <Image alt='logo' priority={true} width={500} height={120} src={'/server1.png'} />
                </div>

                <div className="stick">

                </div>
              </div>
            </div>

            {/* Our Client */}
            <div className='subContent'>
              <h2 className='title'>Our Client</h2>

              <div className='w-full grid grid-cols-3 gap-16'>
                <div className='client'>
                  <div>
                    <Image priority={true} width={150} height={100} src={'/brightcloud.png'} alt='' />
                  </div>
                  <p>Check out how to we power browser cloud gaming for BrightCloud</p>
                </div>
                <div className='client'>
                  <div>
                    <Image priority={true} width={150} height={100} src={'/logo.png'} alt='' />
                  </div>
                  <p>CCheckout how we use
                    our WebRTC, D3D11 and NvEnc expertise
                    to power our cloud gaming service</p>
                </div>
                <div className='client'>
                  <div>
                    <Image priority={true} width={150} height={100} src={'/truecloud.png'} alt='' />
                  </div>
                  <p>Checkout how we
                    power our partner’s
                    cloud gaming service with KVM and
                    thinkmay
                    remote desktop</p>
                </div>
              </div>
            </div>
            {/* contact */}

            <div>
              <p className='text-center'>
                Want to build a real time media streaming application?
                <br />
                Consultant on your virtualization infrastructure?
                <br />
                Need our help?
              </p>

                <a href="">Get In Touch</a>
            </div>
          </div>


        </section>
      </div>
    </main>
  )
}
