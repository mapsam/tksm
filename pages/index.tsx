import RSVP from '../components/Rsvp';

export default function Index() {
  return (
    <div className="content">
      <p>Sam and Taylor are getting married! 🎉</p>

      <h1 id="INFO" className="is-size-1">Event Information</h1>

      <div className="columns is-multiline">
        <div className="column is-one-third">
          <h2 className="is-size-4">Date</h2>
          <p>Saturday August 12th, 2023</p>
        </div>
        <div className="column is-one-third">
          <h2 className="is-size-4">Time</h2>
          <p>5pm - Midnight</p>
        </div>
        <div className="column is-one-third">
          <h2 className="is-size-4">Location</h2>
          <p>2931 First Ave. S., Suite A,<br />Seattle, WA</p>
        </div>
        <div className="column is-one-third">
          <h2 className="is-size-4">Venue</h2>
          <p><a href="https://metropolistgroup.com/event-space/" target="_blank">Metropolist</a></p>
        </div>
        <div className="column is-half">
          <h2 className="is-size-4">Accommodations</h2>
          <p>We encourage you to enjoy Seattle via Airbnb or Vrbo. Some nearby hotels are waka and flocka.</p>
        </div>
      </div>

      <h1 id="REGISTRY" className="is-size-1">Registry</h1>

      <p>We invite you to donate to some of our favorite charities. If you feel inclined to give a gift, you can contribute to our patio project fund our honeymoon.</p>

      <h1 id="RSVP" className="is-size-1">RSVP</h1>

      <RSVP />

      <h1 id="FAQ" className="is-size-1">Frequently Asked Questions</h1>

      <p>Have a question that isn't listed? Text us at 651-343-6555. We'll add and amend as people ask :)</p>

      <h2 className="is-size-4">Are kids allowed?</h2>
      <p>Nope! Have you seen the size of the Matthews family? But for real, we love the kids. The wedding party is for the big kids.</p>

      <h2 className="is-size-4">COVID-19?</h2>
      <p>To keep us all safe we require you to be fully vaccinated at our wedding.</p>

      <h2 className="is-size-4">What should I do in Seattle while I'm visiting?</h2>
      <p>First of all, thanks so much for making the trip. We're really excited you want to spend some time in our favorite place.</p>

      <h2 className="is-size-4">How did we meet?</h2>
      <p>Taylor and Sam met while attending the University of Wisconsin-Madison.</p>
    </div>
  )
}