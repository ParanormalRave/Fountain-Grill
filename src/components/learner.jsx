import fg_vid from './fg_grill.mp4'
export default function Dummy() {
  return (
    <>
      {/* <video autoPlay src="https://youtu.be/-gW7oSFxT2I?si=5ihvcX1jz9eKvOoo"></video> */}
      {/* <iframe src="https://drive.google.com/file/d/1jGky2zGHqPy6epF0INQG_oTT0WXw99ZG/view?usp=sharing" allow='autoplay' /> */}
      <video controls autoPlay>
        <source
          src="https://res.cloudinary.com/dgcjcbsi5/video/upload/fg_grill_kgrknl.mp4"
          type="video/mp4"
        />
      </video>
    </>
  )
}
