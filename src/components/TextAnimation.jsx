import { useState, useEffect } from "react";
import "../styles/TextAnimation.scss";
import {
    textAnimationMotParMot01,
    textAnimationMotParMot02,
} from "../utils/AnimationText.jsx";

const TextAnimation = () => {
    const [text, setText] = useState(null);

    useEffect(() => {
        // setText("Ceci est <br/> <strong> un titre </strong>");
        textAnimationMotParMot01();
        textAnimationMotParMot02();
    }, [text]);

    return (
        <div className="textAnimation">
            <hr />

            <div className="textAnimation__title-programs">
                <div>
                    <span className="stroke-text">EXPLORE OUR</span>
                </div>

                <div>
                    <span>PROGRAMS</span>
                </div>

                <div>
                    <span className="stroke-text">TO SHARE YOU</span>
                </div>
            </div>
            <hr />
            <div className="textAnimation__motParMot">
                <h1
                    className="title"
                >
                    Ceci est <br /> <strong>un titre</strong>
                </h1>
            </div>
            <hr />
            <div className="textAnimation__motParMot">
                <h1
                    className="title"
                    // dangerouslySetInnerHTML={{ __html: text }}
                >
                    Ceci est <br /> <strong>un titre</strong>
                </h1>
            </div>
            <hr />
            <div className="textAnimation__motParMot">
                <h1
                    className="title"
                    // dangerouslySetInnerHTML={{ __html: text }}
                >
                    Ceci est <br /> <strong>un titre</strong>
                </h1>
            </div>
            <hr />
            <div className="textAnimation__motParMot">
                <h1
                    className="title"
                    // dangerouslySetInnerHTML={{ __html: text }}
                >
                    Ceci est <br /> <strong>un titre</strong>
                </h1>
            </div>
            <hr />
            <div className="textAnimation__motParMot">
                <h1
                    className="title"
                    // dangerouslySetInnerHTML={{ __html: text }}
                >
                    Ceci est <br /> <strong>un titre</strong>
                </h1>
            </div>
            <hr />
            <div className="textAnimation__motParMot">
                <h1
                    className="title"
                    // dangerouslySetInnerHTML={{ __html: text }}
                >
                    Ceci est <br /> <strong>un titre</strong>
                </h1>
            </div>
            <hr />
            <div className="textAnimation__motParMot">
                <h1
                    className="title"
                    // dangerouslySetInnerHTML={{ __html: text }}
                >
                    Ceci est <br /> <strong>un titre</strong>
                </h1>
            </div>
            <hr />
            <div className="textAnimation__motParMot">
                <h1
                    className="title"
                    // dangerouslySetInnerHTML={{ __html: text }}
                >
                    Ceci est <br /> <strong>un titre</strong>
                </h1>
            </div>
            <hr />
            <div className="textAnimation__motParMot">
                <h1
                    className="title"
                    // dangerouslySetInnerHTML={{ __html: text }}
                >
                    Ceci est <br /> <strong>un titre</strong>
                </h1>
            </div>
            <hr />
            <div className="textAnimation__motParMot">
                <h1
                    className="title"
                    // dangerouslySetInnerHTML={{ __html: text }}
                >
                    Ceci est <br /> <strong>un titre</strong>
                </h1>
            </div>
            <hr />
            <div id="animation-container">
                <div className="word">Mot 1</div>
                <div className="word">Mot 2</div>
                <div className="word">Mot 3</div>
            </div>
            <hr />
            <div id="animation-container">
                <div className="word">Mot 1</div>
                <div className="word">Mot 2</div>
                <div className="word">Mot 3</div>
            </div>
            <hr />
        </div>
    );
};

export default TextAnimation;
