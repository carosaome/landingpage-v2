import Image from 'next/image'
import './page.scss'
export default function Home() {
  return (
    <main className="main">
      <div className='content'>


        <div className='information'>
          <section className=' section '>
            <header className='ctnHeader '>
              <div className='header contentMaxWidth'>
                <div>
                  <Image alt='logo' priority={true} width={120} height={120} src={'/logo.png'} />
                </div>


                <ul className="right">
                  <li className='item'><a href="#services">Services</a></li>
                  <li className='item'><a href="#technologies">Technologies</a></li>
                  <li className='item'><a href="#casestudy">Case study</a></li>
                  <li className='item'>
                    <a className='btn-gaming' href="https://app.thinkmay.net/">Gaming</a>
                  </li>
                </ul>
              </div>
            </header>
            <div className='lookingFor contentMaxWidth'>
              <h3 className='title'>Are you looking for</h3>
              <div className='options flex ' >
                <a href='https://app.thinkmay.net/' target='_blank' className='selection left'>
                  <div className='relative mb-[40px]'>
                    <Image alt='logo' priority={true} width={120} height={120} src={'/logo.png'} />
                    <p className='w-[120px] absolute bottom-[-11%] left-[53%] italic'>Cloud gaming</p>
                  </div>
                  <ul className='ctnText'>
                    <li>Play game on any devices</li>
                    <li>From 10$ per month</li>
                    <li>Play game instantly</li>
                    <li>Available in Vietnam</li>
                  </ul>
                </a>
                <a href='#services' className='selection right'>
                  <div className='relative mb-[40px]'>
                    <Image alt='logo' priority={true} width={120} height={120} src={'/logo.png'} />
                    <p className='w-[120px] absolute bottom-[-11%] left-[53%] italic'>enterprise</p>
                  </div>
                  <ul className='ctnText'>
                    <li>Consultant CloudPc/gaming service</li>
                    <li>Browser application</li>
                    <li>Streaming protocol</li>
                    <li>Virtualization technology</li>
                  </ul>
                </a>
              </div>
            </div>
          </section>

          <section className='enterprise'>
            <div id='services' className='  '>
              <div className='introduce contentMaxWidth'>
                <div className="left">
                  <div className='content section'>
                    <div className='mb-[80px]'>
                      <h3 className='font-bold text-[5rem] text-white'>Cloud gaming <br />  4k120fps 60ms?</h3>
                      <p className='mt-[40px] leading-none text-white text-[30px]'>
                        Are you building application which have

                        <br />
                        <span className='specialText'>ultra low latency?</span>
                      </p>

                      <a className='mt-[16px] btn-help' href="mailto:huyhoangdo@contact.thinkmay.net">Let us help you</a>
                    </div>
                  </div>
                  <div className='content section'>
                    <div className='mb-[80px]'>
                      <h3 className='font-bold text-[5rem] text-white'>Streaming
                        <br />infrastructure</h3>
                      <ul className='ctnText mt-[40px] pl-[5rem]'>
                        <li className='text'>Virtual machine?</li>
                        <li className='text'>Hypervisor?</li>
                        <li className='text'>Data center? </li>
                        <li className='text'>KVM or Hyper-V?</li>
                        <li className='text'>Big word, let us handle that.</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="right">
                  <div className='content section z-10'>
                    <Image src={'/macbook.png'} alt='' priority={true} width={600} height={500} />
                  </div>

                  <div className='content section z-10'>
                    <Image alt='logo' priority={true} width={600} height={120} src={'/server1.png'} />
                  </div>
                  <div className='stick'>
                  </div>
                </div>
              </div>



            </div>

            <div className='detail contentMaxWidth'>
              <div id='technologies' className='mainContent'>
                <div className='left'>
                  <div className="content section">
                    <div>
                      <h3 className='title'>Streaming application</h3>
                      <ul className='ctnText list-decimal pl-[5rem]'>
                        <li className='text'>Web-based remote desktop.</li>
                        <li className='text'>WebRTC on browser.</li>
                        <li className='text'>Gamepad, keyboard and mouse passthrough</li>
                        <li className='text'>NextJS and ReactJS expert</li>
                      </ul>
                    </div>
                  </div>

                  <div className="content section">
                    <div>
                      <h3 className='title'>Streaming protocol</h3>
                      <ul className='ctnText list-decimal pl-[5rem]'>
                        <li className='text'>WebRTC protocol</li>
                        <li className='text'>Encode library expert</li>
                        <ul className='list-disc pl-4'>
                          <li className="text">Nvenc</li>
                          <li className="text">AMF</li>
                          <li className="text">FFmpeg</li>
                          <li className="text">Gstreamer</li>
                        </ul>

                        <li className='text'>Media codec expert</li>
                        <ul className='list-disc pl-4'><li className="text">H264</li>
                          <li className="text">H265</li>
                          <li className="text">AV1</li>
                          <li className="text">OPUS</li></ul>
                      </ul>
                    </div>
                  </div>

                  <div className="content section">
                    <div>
                      <h3 className='title'>Virtualization infrastructure </h3>
                      <ul className='ctnText'>
                        <li className='text'>KVM and Hyper-V</li>
                        <li className='text'>GPU virtualization</li>
                        <li className='text'>Virtualization performance optimization</li>
                        <li className='text'>Gaming on virtual machine</li>
                        <li className='text'>Virtual display, virtual soundcard</li>
                      </ul>
                    </div>
                  </div>
                </div>


                <div className='right'>
                  <div className='z-10 content'>
                    <Image alt='logo' priority={true} width={600} height={120} src={'/macbook.png'} />
                  </div>
                  <div className="content">

                  </div>
                  <div className='z-10 content'>
                    <Image alt='logo' priority={true} width={600} height={120} src={'/server2.png'} />
                  </div>

                  <div className="stick">

                  </div>
                </div>

                {/*<div className='bg'>
                </div>*/}

                {/*<div className="bg2">

                </div>*/}
              </div>

              {/* Our Client */}
              <div id='casestudy' className='subContent section'>
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
                    <p>Checkout how we use
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


            </div>


          </section>

          <div className='section contact '>
            <div className='info'>
              <div className=' contentMaxWidth flex flex-col items-center'>
                <p className='text-center text '>
                  Want to build a real time media streaming application?
                  <br />
                  Consultant on your virtualization infrastructure?
                  <br />
                  Need our help?
                </p>

                <a className='btn-help mt-[1.6rem]' href="mailto:huyhoangdo@contact.thinkmay.net">Get In Touch</a>
              </div>

            </div>
            <div className='bottom contentMaxWidth'>
              <div>
                <div>
                  <Image priority={true} width={150} height={100} src={'/logo.png'} alt='' />
                </div>
                <span>© 2021-2023 thinkmay - All rights reserved.</span>
              </div>

              <div>
                <h3 className='text-[2.2rem]'>Contact Info</h3>
                <ul>
                  <li className='text-[2rem]'>+84 347961231</li>
                  <li className='text-[2rem]'>huyhoangdo@contact.thinkmay.net</li>
                  <li className='text-[2rem]'>Hoa Lac, Hanoi, Vietnam</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
