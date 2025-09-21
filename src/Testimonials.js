import React, { useState, useEffect } from "react";

const testimonials = [
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac tellus nisi. Nullam consequat risus porttitor orci ullamcorper vehicula. Curabitur luctus velit vel euismod consequat. Fusce quis arcu vehicula arcu tristique tincidunt. Aliquam nisl purus, malesuada eu bibendum vehicula, molestie ac urna. Maecenas tempor ex blandit malesuada viverra. Proin congue lorem non tristique malesuada. Vestibulum pharetra, ex sit amet laoreet sollicitudin, neque erat eleifend dui, id venenatis neque magna eget est. In luctus, velit porta porta lacinia, ex mauris aliquet orci, non fermentum arcu augue nec arcu.",
    author: "Alex Johnson",
    picture: require('./guy.jpg')
  },
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac tellus nisi. Nullam consequat risus porttitor orci ullamcorper vehicula. Curabitur luctus velit vel euismod consequat. Fusce quis arcu vehicula arcu tristique tincidunt. Aliquam nisl purus, malesuada eu bibendum vehicula, molestie ac urna. Maecenas tempor ex blandit malesuada viverra. Proin congue lorem non tristique malesuada. Vestibulum pharetra, ex sit amet laoreet sollicitudin, neque erat eleifend dui, id venenatis neque magna eget est. In luctus, velit porta porta lacinia, ex mauris aliquet orci, non fermentum arcu augue nec arcu.",
    author: "Maria Lopez",
    picture: require('./guy.jpg')
  },
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac tellus nisi. Nullam consequat risus porttitor orci ullamcorper vehicula. Curabitur luctus velit vel euismod consequat. Fusce quis arcu vehicula arcu tristique tincidunt. Aliquam nisl purus, malesuada eu bibendum vehicula, molestie ac urna. Maecenas tempor ex blandit malesuada viverra. Proin congue lorem non tristique malesuada. Vestibulum pharetra, ex sit amet laoreet sollicitudin, neque erat eleifend dui, id venenatis neque magna eget est. In luctus, velit porta porta lacinia, ex mauris aliquet orci, non fermentum arcu augue nec arcu.",
    author: "James Smith",
    picture: require('./guy.jpg')
  }
];
const Testimonials = () => {

const [index, setIndex] = useState(0);
  // Auto-play every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  const next = () => setIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () =>
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <div className="testimonials-section" id="testimonials">
        <h2>Testimonials</h2>
        <div className="testimonial-carousel">
        <div className="testimonial">
            <p>"{testimonials[index].text}"</p>
            <h4>- {testimonials[index].author}</h4>
            <img src={testimonials[index].picture} alt={testimonials[index].author} />
        </div>

        <button className="prev" onClick={prev}>❮</button>
        <button className="next" onClick={next}>❯</button>
        </div>
    </div>
  );
}
 
export default Testimonials;