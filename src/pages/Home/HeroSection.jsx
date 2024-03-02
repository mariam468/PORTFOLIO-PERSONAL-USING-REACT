export default function HeroSection() {
    return( 
    <section id="heroSection" className="hero--section">
        <div className="hero--section--content--bos">
            <div className="hero--section--content">
                <p className="section--title">Hey, I'am Mariam Safaoui</p>
                <h1 className="hero--section--title">
                    <span className="hero--section--title--color">Full Stack</span>{" "}
                    <br/>
                    Web Developer
                </h1>
                <p className="hero--section--description">
                I am a fresh graduate from Lebanese University
                <br/> as well as a recent graduate from ESA Coding Lab
                 <br/> with a certificate in full stack web developer 
                 <br/> seeking for a job in a reputable company 
                 <br/>
                 to expand my knowledge and skills.
                
                 </p>
            </div>
           <br/><br/>
            <button className="btn btn-primary"> Get In Touch</button> 
        
        </div>
        <div className="hero--section--img">
            <img src="./img/photo.jpg" alt="hero section" height={185} width={180} />
        </div>
    </section>
    );
    
    
}