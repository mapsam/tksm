import RSVP from '../components/Rsvp.js';

export default function Index() {
  return (
    <div>
      <p>Sam and Taylor are getting married! 🎉 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam in neque sit amet ante dictum suscipit. Aenean tempus lacinia dapibus. Nulla tincidunt, purus non tempus hendrerit, ligula augue varius urna, quis posuere turpis tortor at nibh. Aliquam consequat posuere egestas. Nunc ut justo ac velit dignissim sodales at vel dolor. Morbi consequat vel nisl sit amet molestie. Nam tristique interdum feugiat. Maecenas tincidunt suscipit quam ornare gravida. Integer sed arcu a nisl bibendum ultrices nec tincidunt neque.</p>

      <h1 id="INFO" className="is-size-1">Event Information</h1>

      <div className="columns is-multiline">
        <div className="column is-one-third">
          <h2 className="is-size-4">Date</h2>
          <p>Saturday June 3rd, 2023</p>
        </div>
        <div className="column is-one-third">
          <h2 className="is-size-4">Time</h2>
          <p>5pm - Midnight</p>
        </div>
        <div className="column is-one-third">
          <h2 className="is-size-4">Location</h2>
          <p>1234 Neat St.<br></br>Seattle, WA</p>
        </div>
        <div className="column is-one-third">
          <h2 className="is-size-4">Venue</h2>
          <p>Some really dope spot.</p>
        </div>
        <div className="column is-half">
          <h2 className="is-size-4">Accommodations</h2>
          <p>Hotel option 1. Airbnb.</p>
        </div>
      </div>
      
      <h1 id="REGISTRY" className="is-size-1">Registry</h1>

      <p>Sed at dolor ante. Phasellus varius purus rutrum nunc ornare, quis lacinia sem varius. Suspendisse potenti. In hac habitasse platea dictumst. Morbi augue tellus, commodo eget interdum ut, vehicula eu neque. In varius urna at rhoncus tempor. Quisque vitae porttitor lacus. In varius sollicitudin nibh condimentum hendrerit. Integer maximus velit risus, at lacinia tortor mollis sollicitudin. Vivamus bibendum diam elementum diam feugiat convallis. Donec lacinia convallis aliquet. Duis eu vestibulum nisi. Donec at diam sed magna ultrices facilisis. Vestibulum pretium enim et dictum imperdiet. Duis at sodales arcu, ut facilisis risus. Curabitur eleifend, enim et molestie ultricies, ante augue lobortis leo, id tempor justo ipsum nec mauris.</p>

      <h1 id="RSVP" className="is-size-1">RSVP</h1>

      <RSVP />

      <h1 id="FAQ" className="is-size-1">Frequently Asked Questions</h1>

      <p>Have a question that isn't listed? Text us at 651-343-6555. We'll add and amend as people ask :)</p>

      <h2 className="is-size-4">Are kids allowed?</h2>
      <p>Nope! Have you seen the size of the Matthews family? But for real, we love the kids. The wedding party is for the big kids.</p>

      <h2 className="is-size-4">COVID-19?</h2>
      <p>To keep us all safe we require you to be fully vaccinated at our wedding.</p>

      <h2 className="is-size-4">What should I do in Seattle while I'm visiting?</h2>
      <p>First of all, thanks so much for making the trip. We're really excited for you to see a little bit of our favorite place.</p>

      <h2 className="is-size-4">How did we meet?</h2>
      <p>Taylor and Sam met while attending the University of Wisconsin-Madison.</p>

    </div>
  )
}