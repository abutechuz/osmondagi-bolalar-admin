import './WebDashIntro.scss'
import '../Team/Team.scss'
import Container from '../Container/Container.js'
import { useRef } from 'react'
import { useQuery } from 'react-query'

function WebDashIntro() {
	const form = useRef()
	// -----
	const speakerName = useRef()
	const speakerJob = useRef()
	const speakerAbout = useRef()
	// ---------
	const videoTitle = useRef()
	const videoTexts = useRef()
	const videoYtid = useRef()
	// ----
	const sliderImg = useRef()
	const smallImg = useRef()
	const bigImg = useRef()

	const { data, isSuccess } = useQuery({
		queryKey: 'video',

		queryFn: () =>
			fetch('https://api.osmondagibolalar.uz/videos', {
				token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxLCJ1c2VybmFtZSI6ImFkbWluIiwicGFzc3dvcmQiOiIkMmEkMDYkYWxpb3lLRkVVUWd5VzJ2S2MwUXc3dW1vOVZIWjFDa0U1UUFmTkliT0V0Wi9iSUMvRzZLRi4iLCJpYXQiOjE2MjAwMjQzMDZ9.ifbelGdLxQ3Hg_RbtT3RIpAw9V1MGLBpDkrrnh1zh-I',
			}).then((data) => data.json()),
	})

	async function added(evt) {
		evt.preventDefault()
		const formData = new FormData()
		formData.append('video_speaker_name', speakerName.current.value)
		formData.append('video_speaker_job', speakerJob.current.value)
		formData.append('video_speaker_about', speakerAbout.current.value)
		// ----- video
		formData.append('video_title', videoTitle.current.value)
		formData.append('video_texts', videoTexts.current.value)
		formData.append('video_ytid', videoYtid.current.value)
		// ---- imgs
		formData.append('sliderImage', sliderImg.current.files[0])
		formData.append('smallImage', smallImg.current.files[0])
		formData.append('bigImage', bigImg.current.files[0])

		await fetch('https://api.osmondagibolalar.uz/videos', {
			method: 'POST',
			body: formData,
			headers: {
				'Access-Control-Allow-Origin':'*',
				token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxLCJ1c2VybmFtZSI6ImFkbWluIiwicGFzc3dvcmQiOiIkMmEkMDYkYWxpb3lLRkVVUWd5VzJ2S2MwUXc3dW1vOVZIWjFDa0U1UUFmTkliT0V0Wi9iSUMvRzZLRi4iLCJpYXQiOjE2MjAwMjQzMDZ9.ifbelGdLxQ3Hg_RbtT3RIpAw9V1MGLBpDkrrnh1zh-I',
			},
		}).then(() => alert('Added'))
	}

	async function deleted(e) {
		const formData = new FormData()
		formData.append('video_id', e.target.dataset.vid)
		await fetch(`https://api.osmondagibolalar.uz/videos`, {
			method: 'DELETE',
			body: formData,
			headers: {
				token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxLCJ1c2VybmFtZSI6ImFkbWluIiwicGFzc3dvcmQiOiIkMmEkMDYkYWxpb3lLRkVVUWd5VzJ2S2MwUXc3dW1vOVZIWjFDa0U1UUFmTkliT0V0Wi9iSUMvRzZLRi4iLCJpYXQiOjE2MjAwMjQzMDZ9.ifbelGdLxQ3Hg_RbtT3RIpAw9V1MGLBpDkrrnh1zh-I',
			},
		}).then(() => alert('Deleted'))
	}

	return (
		<>
			<Container className='web-intro'>
				<form
					ref={form}
					onSubmit={added}
					className='web-intro__form'
					action=''
					method='POST'
					autoComplete='off'>
					<div className='web-intro__speaker speaker'>
						<div className='speaker__inner'>
							<input
								ref={speakerName}
								className='speaker__input'
								type='text'
								name='speaker_name'
								placeholder='Speaker Ism va Familiyasi '
								required
							/>
							<input
								ref={speakerJob}
								className='speaker__input'
								type='text'
								name='speaker_job'
								placeholder='Speaker Ish joyi'
								required
							/>
						</div>
						<textarea
							ref={speakerAbout}
							className='speaker__texarea'
							name='spaeker_about'
							placeholder='Speaker haqida'
							required></textarea>
					</div>

					<div className='web-intro__speaker speaker'>
						<div className='speaker__inner'>
							<textarea
								ref={videoTitle}
								className='speaker__input'
								type='text'
								name='video_title'
								placeholder='Video title (<span></span>)'
								maxLength='100'
								required
							/>
							<input
								ref={videoYtid}
								className='speaker__input'
								type='text'
								name='video_ytid'
								placeholder='Video YouTube ID'
								required
							/>
						</div>
						<textarea
							ref={videoTexts}
							className='speaker__texarea'
							name='video_text'
							placeholder='Video text'
							required></textarea>
					</div>

					<div className='web-intro__file'>
						<label className='web-intro__label-btn'>
							<span>Slider Image (PNG)</span>
							<input
								ref={sliderImg}
								className='web-intro__file-input visually-hidden'
								type='file'
								name='sliderImage'
								accept='image/png'
								required
								onChange={(e) =>
									e.target.parentElement.classList.add(
										'web-intro__label-btn--active',
									)
								}
							/>
						</label>
						<label className='web-intro__label-btn'>
							<span>Small Image</span>
							<input
								ref={smallImg}
								className='web-intro__file-input visually-hidden'
								type='file'
								name='smallImage '
								accept='image/*'
								required
								onChange={(e) =>
									e.target.parentElement.classList.add(
										'web-intro__label-btn--active',
									)
								}
							/>
						</label>
						<label className='web-intro__label-btn'>
							<span>Big Image</span>
							<input
								ref={bigImg}
								className='web-intro__file-input visually-hidden'
								type='file'
								name='bigImage '
								accept='image/*'
								required
								onChange={(e) =>
									e.target.parentElement.classList.add(
										'web-intro__label-btn--active',
									)
								}
							/>
						</label>
					</div>

					<button className='web-intro__btn' type='submit'>
						Send
					</button>
				</form>

				<ul className='team-members__list web-intro__list'>
					{isSuccess &&
						data?.map((e) => (
							<li className='team-members__item' key={e.video_id}>
								{e.video_speaker_name}
								<button
									className='team-members__item-btn'
									data-vid={e.video_id}
									onDoubleClick={deleted}>
									Delete
								</button>
							</li>
						))}
				</ul>
			</Container>
		</>
	)
}

export default WebDashIntro
