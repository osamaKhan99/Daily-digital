import React from "react";


const About = () => {
    return (
        <div>
            <div className="main">
                <div className="left">
                    <h1 className="heading">Let All Yours Ideas Bloom.</h1>
                    <p>You can share ideas, thoughts and news with others. Share your knowledge <br/> and get from others 
                    We are living in digital world where communication with each other <br/>is going easy day by day. We give this
                    platfrom for our users to communicate the ideas, <br/> thoughts and knowledge with each other.
                    </p>
                </div>
                <div className="right">
                    
                    <iframe src="https://player.vimeo.com/video/467834328?api=1&amp;background=1&amp;mute=1&amp;loop=1" positioning="relative" frameborder="0" allow="autoplay; fullscreen" allowfullscreen=""></iframe>
                </div>
            </div>
            <div className="intro">
                <h1>About Us</h1>
                <p>Welcome to Daily Digital, your number one source for all the information. We're dedicated to providing you the very best of platfrom, with an emphasis on easy to use, user-friendly, shareable.
Founded in [year] by [founder name], Daily Digital has come a long way from its beginnings in [starting location]. When [founder name] first started out, [his/her/their] passion for [brand message - e.g. "eco-friendly cleaning products"] drove them to start their own business.
We hope you enjoy our products as much as we enjoy offering them to you. If you have any questions or comments, please don't hesitate to contact us.</p>
            </div>
            <h1 className="team-heading">Our Team</h1>
            <div className="team">
                <div className="intro-box">
                    <img className="avatar" src="https://avatars.githubusercontent.com/u/48415762?v=4"/>
                    <h3>Osama Waseem Azmat</h3>
                    <h4>MERN Stack Developer</h4>
                </div>
                <div className="intro-box">
                    <img className="avatar" src="https://media-exp1.licdn.com/dms/image/C4D35AQG9uYpRxhpGTw/profile-framedphoto-shrink_800_800/0/1612375173048?e=1627650000&v=beta&t=RJb6TpBbxi385c3RysE4_6FmMu-WpU1RVWDQNdSdn44"/>
                    <h3>Muhammad Ahmed Zafar</h3>
                    <h4>Full Stack Web Developer</h4>
                </div>
            </div>
      </div>
    )
}
export default About;