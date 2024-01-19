export const BodyWithTitle = (props) => {
    return (
        <section className="flex flex-col items-center justify-center w-full h-screen px-60 py-40 gap-16">
        <p className="w-full text-5xl font-semibold">{props.title}</p>
        <div className="flex w-full h-full justify-center text-xl gap-24">
            {props.children}
        </div>
      </section>
    )
}