import React from 'react'
import Mobile from '../../../images/mobile-appfeatures.svg'
import FeatureIcon_1 from '../../../images/icons/feature_1.svg'
import FeatureIcon_2 from '../../../images/icons/feature_2.svg'
import FeatureIcon_3 from '../../../images/icons/feature_3.svg'
import FeatureIcon_4 from '../../../images/icons/feature_4.svg'
import FeatureIcon_5 from '../../../images/icons/feature_5.svg'
import FeatureIcon_6 from '../../../images/icons/feature_6.svg'

const AppFeatures = () => {
    return (
        <div className="container">
            <div id="app-features">
                <img id="app-features-mobile-image" src={Mobile} alt="icon"/>
                <div id="feature-grid">
                    <div id="feature-grid-header">
                        <h2>App Features</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin volutpat mollis egestas.
                            Nam
                            luctus
                            facilisis ultrices. Pellentesque volutpat ligula est. Mattis fermentum, at nec
                            lacus.</p>
                    </div>
                    <div id="right-bottom">
                        <div className="feature-grid-item">
                            <img className="feature-icon" src={FeatureIcon_1} alt="icon"/>
                            <div>
                                <h5>Easy Payments</h5>
                                <p>Id mollis consectetur congue egestas egestas suspendisse blandit justo.</p>
                            </div>
                        </div>
                        <div className="feature-grid-item">
                            <img className="feature-icon" src={FeatureIcon_2} alt="icon"/>
                            <div>
                                <h5>Data Security</h5>
                                <p>Augue pulvinar justo, fermentum fames aliquam accumsan vestibulum non. </p>
                            </div>
                        </div>
                        <div className="feature-grid-item">
                            <img className="feature-icon" src={FeatureIcon_3} alt="icon"/>
                            <div>
                                <h5>Cost Statistics</h5>
                                <p>Mattis urna ultricies non amet, purus in auctor non. Odio vulputate ac nibh.</p>
                            </div>
                        </div>
                        <div className="feature-grid-item">
                            <img className="feature-icon" src={FeatureIcon_4} alt="icon"/>
                            <div>
                                <h5>Support 24/7</h5>
                                <p>A elementum, imperdiet enim, pretium etiam facilisi in aenean quam mauris.</p>
                            </div>
                        </div>
                        <div className="feature-grid-item">
                            <img className="feature-icon" src={FeatureIcon_5} alt="icon"/>
                            <div>
                                <h5>Regular Cashback</h5>
                                <p>Sit facilisis dolor arcu, fermentum vestibulum arcu elementum imperdiet
                                    eleifend.</p>
                            </div>
                        </div>
                        <div className="feature-grid-item">
                            <img className="feature-icon" src={FeatureIcon_6} alt="icon"/>
                            <div>
                                <h5>Top standards</h5>
                                <p>Faucibus cursus maecenas lorem cursus nibh. Sociis sit risus id. Sit facilisis
                                    dolor
                                    arcu.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default AppFeatures
