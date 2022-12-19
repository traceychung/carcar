import './index.css';
import { HeaderImg } from './HeaderImg';
import { CardGroup } from './CardGroup';

function MainPage() {
  return (
    <div id="home-page">
      <div className='banner'>
        <HeaderImg title="CarCar" subTitle="The premiere solution for automobile dealership management!"/>
      </div>
      <section>
        <div className="container pt-5">
          <h1>About Us</h1>
          <p>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          </p>
        </div>
      </section>
      <div>
        <CardGroup />
      </div>
  </div>

  );
}

export default MainPage;
