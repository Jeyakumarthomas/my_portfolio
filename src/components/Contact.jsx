

const Contact = () => {
    const config = {
        email : "jeyakumararulraj22@gmail.com",
        phone :`9629 20 6262`,
    }
    return(
        <section id="contact" className="flex flex-col bg-primary px-5 py-32" >
            <div className="flex flex-col items-center text-white">
                
                <h2 className="text-4xl  border-b-4 border-[#2b2d33] mb-4 w-[135px] font-bold">Contact</h2>
                <p className="pb-5">If you want to discuss more in detail, Please contact me</p>
                <p className="py-2"><span className="font-bold">Email :</span> {config.email} </p>
                <p className="py-2"><span className="font-bold">Phone :</span> +91 {config.phone}</p>
                
            </div>

        </section>
    )
}
export default Contact