import Bubble from './Bubble';

import './Homepage.scss';
import David from './david.png';

function Homepage() {
    return (
        <div className="row d-flex flex-grow-1 flex-column-reverse flex-md-row">
            <div className="col-md-5 col-lg-5 col-xl-4 d-flex align-items-end">
                <img className="img-fluid" src={David} alt="Halápi Dávid" title="Halápi Dávid" />
            </div>
            <div className="col-12 col-md-7 col-lg-7 col-xl-8 d-block position-relative">
                <Bubble />
            </div>

        </div>
    );
}

export default Homepage;