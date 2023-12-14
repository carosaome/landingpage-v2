'use client'
import Image from 'next/image'
import './contact.scss'
import { useEffect, useRef } from 'react'
import sweetalert from 'sweetalert2'
import { ContactUS, REDIRECT_PAGE, UserEvents } from '@/utils/analytics'


export default function Contact() {
	const content = useRef<HTMLTextAreaElement>(null)
	const email = useRef<HTMLInputElement>(null)

	useEffect(() => { UserEvents({content: 'go to contact page'}) })
	const Send = async () => {
		const data = {
			content: content.current?.value ?? 'unknown',
			email: email.current?.value ?? 'unknown'
		}

		await ContactUS(data)
		
		sweetalert.fire({
			title: "Thank you",
			text: "We received your message!",
			icon: "success"
		});
	}

	return (


		<div className='contact '>
			<header className='ctnHeader '>
				<div className='header contentMaxWidth'>
					<a href='/' className='block'>
						<Image alt='logo' priority={true} width={120} height={120} src={'/logo.png'} />
					</a>


					<ul className="right">
						<li className='item'><a href="/#services">Services</a></li>
						<li className='item'><a href="/#technologies">Technologies</a></li>
						<li className='item'><a href="/#casestudy">Case study</a></li>
						<li className='item'>
							<a
								href={REDIRECT_PAGE}
								className='btn-gaming'
							>Gaming</a>
						</li>
					</ul>
				</div>
			</header>
			<div className='info'>

				<div className=' contentMaxWidth pb-[40px]  w-full h-full flex flex-col items-center'>
					<div className='overflow-hidden flex gap-[32px] p-[32px] flex-1 max-w-[900px]  max-h-[540px] w-full rounded-xl bg-[#efe3d2]'>
						<div className='left'>
							<h3 className="title">Let’s discuss further</h3>
							<p className='text-[#232323] text-[1.6rem]'>How can we help you?</p>
							<div className=''>
								<input ref={email} className='mb-[8px]' type="text" placeholder='Your email' />
								<textarea name="" id="" placeholder='Your description about the problem ' ref={content} ></textarea>
							</div>
							<button 
								onClick={Send}
								className='btn-send mt-[40px]'>Send</button>
						</div>

						<div className='right'>
							<h3 className='title'>Let’s connect and answer your questions about Thinkmay</h3>

							<ul className='flex flex-col list-disc gap-[4px] pl-5'>
								<li className='text'>Chat through Thinkmay products and solutions that address your needs</li>
								<li className='text'>Receive an end to end product walkthrough</li>
								<li className='text'>Learn how our pricing plans and/or trial work in detail</li>
							</ul>
						</div>
					</div>

				</div>

			</div>
			<div className='  ctnBottom'>
				<div className='bottom contentMaxWidth h-full'>
					<div>
						<div>
							<Image priority={true} width={150} height={100} src={'/logo.png'} alt='' />
						</div>
						<span>© 2021-2023 thinkmay - All rights reserved.</span>
					</div>

					<div>
						<ul>
						<li className='text-[2rem]'>Services</li>
						<li className='text-[2rem]'>Technologies</li>
						<li className='text-[2rem]'>Case study</li>
						</ul>
					</div>

					<div>
						<ul>
						<li className='text-[2rem]'>huyhoangdo@contact.thinkmay.net</li>
						<li className='text-[2rem]'>Hoa Lac, Ha Noi, Viet Nam</li>
						</ul>
					</div>

				</div>
			</div>
		</div>
	)


}