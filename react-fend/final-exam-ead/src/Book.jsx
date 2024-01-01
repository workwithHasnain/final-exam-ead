function Available() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <div className="col-lg-3">
        <div className="container">
          <h1>Book Time Slot</h1>
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" />
            <label htmlFor="email">Email:</label>
            <input type="text" id="email" />
            <p>10:00</p>
            <button type="submit">Book</button>
          </form>
        </div>
      </div>
    </>
  );
}
export default Available;
