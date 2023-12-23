import { useState } from 'react';
import people from './data';
import { FaQuoteRight, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const App = () => {
  const [index, setIndex] = useState(0);
  const { id, image, job, name, text } = people[index];

  const prevPerson = () => {
    setIndex((prev) => {
      const newIdx = prev - 1;
      if (newIdx < 0) {
        return people.length - 1;
      }
      return newIdx;
    });
  };

  const nextPerson = () => {
    setIndex((prev) => {
      const newIdx = prev + 1;
      if (newIdx > people.length - 1) {
        return 0;
      }
      return newIdx;
    });
  };

  const randomPerson = () => {
    const randomIdx = Math.floor(Math.random() * 4);
    setIndex(randomIdx);
  };

  return (
    <main>
      <article className="review">
        <div className="img-container">
          <img src={image} alt={name} className="person-img" />
          <span className="quote-icon">
            <FaQuoteRight />
          </span>
        </div>
        <h4 className="author">{name}</h4>
        <p className="job">{job}</p>
        <p className="info">{text}</p>
        <div className="btn-container">
          <button className="prev-btn" onClick={prevPerson}>
            <FaChevronLeft />
          </button>
          <button className="next-btn" onClick={nextPerson}>
            <FaChevronRight />
          </button>
        </div>
        <button className="btn" onClick={randomPerson}>
          surpise me
        </button>
      </article>
    </main>
  );
};

export default App;
