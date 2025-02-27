import React from 'react';
import {Link} from 'react-router-dom';
import Slideshow from '../components/Slideshow.js';

import '../styles/style_text.css';
import '../styles/style_button.css';
import '../styles/style_container.css';
import '../styles/style_anims.css';
import '../styles/style_scroll.css';
import '../styles/style_index.css';

const Home = () => {
    return (
        <body style={{backgroundColor: "#eeeeee"}}>
            <div className="flex_MV" style={{backgroundColor: "#e8e8e8", paddingLeft: "5%", paddingRight: "5%"}}>
                <h1 className="anim_fadeIn1"> Peter Bignold </h1>
                <h2 className="anim_fadeIn2"> Computer Scientist &#x2022; Software Developer &#x2022; Digital Artist </h2>
                <div class="flex_MH anim_fadeIn3">
                    <button className="button_icon" onClick={() => window.open("https://www.linkedin.com/in/peter-bignold-b507171b1/")}> 
                        <img src={require("../images/home/linkedin1.png")} alt="LinkedIn" style={{width: "32px", height: "32px"}}></img>
                    </button>
                    <button className="button_icon" onClick={() => window.open("https://github.com/Peter-Bignold")}> 
                        <img src={require("../images/home/github1.png")} alt="GitHub" style={{width: "32px", height: "32px"}}></img>
                    </button>
                    <button className="button_icon" onClick={() => window.open("https://www.youtube.com/@noodle_games")}>
                        <img src={require("../images/home/youtube1.png")} alt="YouTube" style={{width: "32px", height: "32px"}}></img>
                    </button>
                    <button className="button_icon" onClick={() => window.open("https://www.artstation.com/peter_bignold")}>
                        <img src={require("../images/home/artstation1.png")} alt="ArtStation" style={{width: "32px", height: "32px"}}></img>
                    </button>
                    <button className="button_icon" onClick={() => window.open("https://noodlegames.itch.io/")}>
                        <img src={require("../images/home/itch1.png")} alt="itch.io" style={{width: "32px", height: "32px"}}></img>
                    </button>
                </div>
            </div>

            <div className="flex_MV" style={{backgroundColor: "#e8e8e8"}}>
                <img className="anim_fadeIn0" src={require("../images/home/mclaren1.jpg")} alt="Mclaren" style={{width: "100%", marginTop: "32px"}}></img>
            </div>

            <div className="flex_MH wrap_reverse" style={{marginBottom: "100px"}}>
                <img src={require("../images/home/headshot2.jpg")} alt="Peter Bignold" style={{width: "325px", height: "325px", borderRadius: "100%"}}></img>
                <div className="flex_MV index_intro" style={{paddingLeft: "40px", paddingRight: "40px", marginBottom: "40px"}}>
                    <h3> Hey There! </h3>
                    <p style={{maxWidth: "820px"}}>
                        I'm a <b>computer scientist</b> experienced in <b>web</b> and <b>app development</b>,
                        striving to create innovative and impactful products. With proficiency
                        in modern development frameworks and a strong problem-solving foundation, 
                        I'm excited to bring my skills to meaningful projects and collaborate with
                        creative teams.
                    </p>
                </div>
            </div>

            <div class="flex_MV" style={{marginBottom:"100px", marginLeft: "5%", marginRight: "5%"}}>
            <h3> I'm Familiar With... </h3>
            <div class="flex_MH wrap" style={{maxWidth: "1200px"}}>
                <div class="flex_textbox"><p style={{margin: 0, marginTop: "5px"}}> C </p></div>
                <div class="flex_textbox"><p style={{margin: 0, marginTop: "5px"}}> C++ </p></div>
                <div class="flex_textbox"><p style={{margin: 0, marginTop: "5px"}}> C# </p></div>
                <div class="flex_textbox"><p style={{margin: 0, marginTop: "5px"}}> Python </p></div>
                <div class="flex_textbox"><p style={{margin: 0, marginTop: "5px"}}> Java </p></div>
                <div class="flex_textbox"><p style={{margin: 0, marginTop: "5px"}}> Haskell </p></div>
                <div class="flex_textbox"><p style={{margin: 0, marginTop: "5px"}}> Bash / Shell </p></div>
                <div class="flex_textbox"><p style={{margin: 0, marginTop: "5px"}}> SQL </p></div>
                <div class="flex_textbox"><p style={{margin: 0, marginTop: "5px"}}> MySQL </p></div>
                <div class="flex_textbox"><p style={{margin: 0, marginTop: "5px"}}> SQLite </p></div>
                <div class="flex_textbox"><p style={{margin: 0, marginTop: "5px"}}> PHP </p></div>
                <div class="flex_textbox"><p style={{margin: 0, marginTop: "5px"}}> HTML </p></div>
                <div class="flex_textbox"><p style={{margin: 0, marginTop: "5px"}}> CSS </p></div>
                <div class="flex_textbox"><p style={{margin: 0, marginTop: "5px"}}> JavaScript </p></div>
                <div class="flex_textbox"><p style={{margin: 0, marginTop: "5px"}}> Git </p></div>
                <div class="flex_textbox"><p style={{margin: 0, marginTop: "5px"}}> React </p></div>
                <div class="flex_textbox"><p style={{margin: 0, marginTop: "5px"}}> Vue </p></div>
                <div class="flex_textbox"><p style={{margin: 0, marginTop: "5px"}}> Vue Options API </p></div>
                <div class="flex_textbox"><p style={{margin: 0, marginTop: "5px"}}> Vue Composition API </p></div>
                <div class="flex_textbox"><p style={{margin: 0, marginTop: "5px"}}> Vuex </p></div>
                <div class="flex_textbox"><p style={{margin: 0, marginTop: "5px"}}> Redux </p></div>
                <div class="flex_textbox"><p style={{margin: 0, marginTop: "5px"}}> Node </p></div>
                <div class="flex_textbox"><p style={{margin: 0, marginTop: "5px"}}> NPM </p></div>
                <div class="flex_textbox"><p style={{margin: 0, marginTop: "5px"}}> Expo </p></div>
                <div class="flex_textbox"><p style={{margin: 0, marginTop: "5px"}}> Tailwind </p></div>
                <div class="flex_textbox"><p style={{margin: 0, marginTop: "5px"}}> Bootstrap </p></div>
                <div class="flex_textbox"><p style={{margin: 0, marginTop: "5px"}}> PowerBI </p></div>
                <div class="flex_textbox"><p style={{margin: 0, marginTop: "5px"}}> Logic Apps </p></div>
                <div class="flex_textbox"><p style={{margin: 0, marginTop: "5px"}}> Office </p></div>
                <div class="flex_textbox"><p style={{margin: 0, marginTop: "5px"}}> Unity </p></div>
                <div class="flex_textbox"><p style={{margin: 0, marginTop: "5px"}}> Unreal Engine 4/5 </p></div>
                <div class="flex_textbox"><p style={{margin: 0, marginTop: "5px"}}> Blueprints </p></div>
                <div class="flex_textbox"><p style={{margin: 0, marginTop: "5px"}}> Blender </p></div>
                <div class="flex_textbox"><p style={{margin: 0, marginTop: "5px"}}> GIMP </p></div>
                <div class="flex_textbox"><p style={{margin: 0, marginTop: "5px"}}> Audacity </p></div>
                <div class="flex_textbox"><p style={{margin: 0, marginTop: "5px"}}> OpenGL </p></div>
                <div class="flex_textbox"><p style={{margin: 0, marginTop: "5px"}}> PhysX </p></div>
                <div class="flex_textbox"><p style={{margin: 0, marginTop: "5px"}}> ElasticSearch </p></div>
                <div class="flex_textbox"><p style={{margin: 0, marginTop: "5px"}}> DynamoDB </p></div>
                <div class="flex_textbox"><p style={{margin: 0, marginTop: "5px"}}> Lambda </p></div>
                <div class="flex_textbox"><p style={{margin: 0, marginTop: "5px"}}> Cloudfront </p></div>
                <div class="flex_textbox"><p style={{margin: 0, marginTop: "5px"}}> S3 </p></div>
            </div>
        </div>

        <div class="flex_MV" style={{marginBottom: "100px", marginLeft: "5%", marginRight: "5%"}}>
            <h3> Software Development </h3>
            <p> 
                During my free time I create apps, games and real-time simulations. I've worked in React Native, UE4, UE5, Unity, and raw C++ for my projects, and upload my prototypes, game jams, and full games to&nbsp;
                <a style={{cursor: "pointer"}} onClick={() => window.open("https://noodlegames.itch.io/")} href="#/">itch.io</a>
            </p>
            <div class="flex_MH wrap">
                <Link class="flex_LV button_game_small" to='games/circuitry'>
                    <div class="flex_LH">
                        <img alt="logo" src={require("../images/circuitry/logo1.png")} style={{width: "68px", height: "68px"}}></img>
                        <div class="flex_LV" style={{marginLeft: "24px"}}>
                            <h4> Circuitry </h4>
                            <h5> 2025 &#x2022; React Native </h5>
                        </div>
                    </div>
                </Link>
                <Link class="flex_LV button_game_small" to='games/flocking_evolution'>
                    <div class="flex_LH">
                        <img alt="logo" src={require("../images/flocking_evolution/logo1.png")} style={{width: "68px", height: "68px"}}></img>
                        <div class="flex_LV" style={{marginLeft: "24px"}}>
                            <h4> Flocking Evolution </h4>
                            <h5> 2023 &#x2022; Unity </h5>
                        </div>
                    </div>
                </Link>
                <Link class="flex_LV button_game_small" to='games/space_salvagers'>
                    <div class="flex_LH">
                        <img alt="logo" src={require("../images/space_salvagers/logo1.png")} style={{width: "68px", height: "68px"}}></img>
                        <div class="flex_LV" style={{marginLeft: "24px"}}>
                            <h4> Super Space Salvagers </h4>
                            <h5> 2023 &#x2022; C++ </h5>
                        </div>
                    </div>
                </Link>
            </div>
            <div class="flex_MH wrap">
                <Link class="flex_LV button_game_small" to='games/mini_racer'>
                    <div class="flex_LH">
                        <img alt="logo" src={require("../images/mini_racer/logo1.png")} style={{width: "68px", height: "68px"}}></img>
                        <div class="flex_LV" style={{marginLeft: "24px"}}>
                            <h4> Mini Racer </h4>
                            <h5> 2022 &#x2022; Unreal Engine 5 </h5>
                        </div>
                    </div>
                </Link>
                <Link class="flex_LV button_game_small" to='games/apogee'>
                    <div class="flex_LH">
                        <img alt="logo" src={require("../images/apogee/logo1.png")} style={{width: "68px", height: "68px"}}></img>
                        <div class="flex_LV" style={{marginLeft: "24px"}}>
                            <h4> Apogee </h4>
                            <h5> 2021 &#x2022; Unreal Engine 4 </h5>
                        </div>
                    </div>
                </Link>
                <Link class="flex_LV button_game_small" to='games/pinata_clicker'>
                    <div class="flex_LH">
                        <img alt="logo" src={require("../images/pinata_clicker/logo1.png")} style={{width: "68px", height: "68px"}}></img>
                        <div class="flex_LV" style={{marginLeft: "24px"}}>
                            <h4> Pinata Clicker </h4>
                            <h5> 2020 &#x2022; Unreal Engine 4 </h5>
                        </div>
                    </div>
                </Link>
                <Link class="flex_LV button_game_small" to='games/misfire'>
                    <div class="flex_LH">
                        <img alt="logo" src={require("../images/misfire/logo1.png")} style={{width: "68px", height: "68px"}}></img>
                        <div class="flex_LV" style={{marginLeft: "24px"}}>
                            <h4> Misfire </h4>
                            <h5> 2019 &#x2022; Unreal Engine 4 </h5>
                        </div>
                    </div>
                </Link>
            </div>
        </div>

        <div class="flex_MV" style={{marginRight: "5%", marginLeft: "5%"}}>
            <h3> Digital Artwork </h3>
            <p> 
                I've practiced 3D vehicle modelling since 2016, combining my interests in motorsports and graphics. Blender is my program of 
                choice for creating models and I use GIMP for textures and editing. My digital artwork can be viewed on&nbsp; 
                <a style={{cursor: "pointer"}} onClick={() => window.open("https://www.artstation.com/peter_bignold")} href="#/">Artstation</a>
            </p>
        </div>

        <Slideshow/>
        </body>
    )
}

export default Home;