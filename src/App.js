import React from "react";
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import { useState } from "react";
import FeedbackData from "./data/FeedbackData";
import FeedbackForm from "./components/FeedbackForm";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import AboutIconLink from "./components/AboutIconLink";

function App() {
  const [feedback, setFeedback] = useState(FeedbackData);
  return (
    <Router>
      <Header />
      <div className="container">
        <Routes>
          <Route
            exact path="/"
            element=
            {
              <>
                <FeedbackForm />
                <FeedbackList feedback={feedback} setFeedback={setFeedback} />
              </>
            }></Route>
          <Route path="/about" element={<AboutPage />}></Route>
          <Route path="/contact" element={<ContactPage />}></Route>
        </Routes>
        <AboutIconLink />
      </div>
    </Router>
  );
}

export default App;
