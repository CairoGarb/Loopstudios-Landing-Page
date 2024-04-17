import { useMediaQuery } from 'react-responsive'
import './Leader.css'

export const Leader = () => {

    const responsiveLeaderImg = useMediaQuery({ maxWidth: 900 })

    return (
        <div className="leaderContainer">

            {responsiveLeaderImg ? (
                <div className="imgLeaderMobile">
                    <img src='./mobile/image-interactive.jpg' alt='interactive' />
                    <div className="textLeader">
                        <h2>The leader in interactive VR</h2>
                        <p>Found in 2011, Loopstudios has been producing
                            world-class virtual reality projects for some
                            of the best companies around the globe. Our award-
                            winning creations have transformed businesses through
                            digital experiences that bind to their brand.
                        </p>
                    </div>
                </div>

            ) : (
                <div className="imgLeaderDesktop">
                    <img src='./desktop/image-interactive.jpg' alt='interactive' />
                    <div className="textLeader">
                        <h2>The leader in interactive VR</h2>
                        <p>Found in 2011, Loopstudios has been producing
                            world-class virtual reality projects for some
                            of the best companies around the globe. Our award-
                            winning creations have transformed businesses through
                            digital experiences that bind to their brand.
                        </p>
                    </div>
                </div>
            )}



        </div>
    )
}
