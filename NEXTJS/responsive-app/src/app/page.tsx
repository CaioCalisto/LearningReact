
export default function Home() {
  return (
    <main className="">
      <p className="text-rem">This text uses rem as unit</p>
      <br />
      <br />
      <br />
      <p className="text-percentage">This text uses percentage</p>
      <br />
      <br />
      <br />
      <p className="text-vw">This text uses vw</p>
      <br />
      <br />
      <br />
      <div className="my-form">
        <p className="text-vw">Form</p>
        <div className="my-form-line">
          <input type="text" name="text1" id="text1" className="textbox" placeholder="Name" />
          <input type="text" name="text1" id="text2" className="textbox" placeholder="Age" />
        </div>
      </div>
      <br />
      <br />
      <br />
      <div className="my-form2">
        <p className="text-vw">Form</p>
        <div className="my-form-line2">
          <input type="text" name="text1" id="text1" className="textbox2" placeholder="Name" />
          <input type="text" name="text1" id="text2" className="textbox2" placeholder="Age" />
          <input type="text" name="text1" id="text2" className="textbox2" placeholder="Address" />
          <input type="text" name="text1" id="text2" className="textbox2" placeholder="Surname" />
          <input type="text" name="text1" id="text2" className="textbox2" placeholder="Whatever" />
        </div>
      </div>
      <br />
      <br />
      <br />
      <img src="/Ferrari.jpeg" width={'60%'} />
    </main>
  );
}