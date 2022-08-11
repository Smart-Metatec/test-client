import { SupportPage } from "../../styled/Dashboard/Support.styled"

const Support = () => {

  return (
    <SupportPage>
      <h1>Contact Us</h1>
      <p>If you have any questions feel free to contact us.</p>

      <section className="btn-container">
          {/* <button onClick={() => navigate("createticket")}>Ask a Question</button> */}
          {/* <button>View Tickets</button> */}
          <a href="mailto:support@smartmetatec.com">Ask a Question</a>
      </section>
    </SupportPage>
  )
}

export default Support