let twother = `	<br />
<br />
<div class="projSpecificHeader">
<img class="projSpecificBadseedimg" src="images/twother.png" alt="">
  <div class="projSpecificDesc">
  <h2>Twother</h2>
  <p>People are often unaware of the fact that they are surrounded by only one perspective and become stuck in an echo chamber. In this project, we wanted to understand how we might raise awareness about echo chambers among Twitter users and encourage them to break out of them. We then developed Twother, a chrome extension that brings users awareness of different echo chamber experiences.</p>
</div>
</div>	
<div class="deepdive">
<div class="grid-container">
  <div class="grid-item title">The problem</div>
  <div class="grid-item">The Twitter community is often considered a toxic one: Twitter users are constantly surrounded by posts that echo back their opinion, causing them to maintain their current opinions, regardless of alternative resources. This situation is referred to as an echo chamber and frequently causes users to engage in confirmation bias for potentially skewed information.</div>
  <div class="grid-item title">The Goal</div>  
  <div class="grid-item">Harness the collective powers of everyday users to help Twitter users break out of their echo chambers.</div>
  <div class="grid-item title">The Solution</div>
  <div class="grid-item">
  In order to encourage users to notice that they are surrounded by the same opinion over and over, we suggest a plugin or chrome extension that overlays on Twitter posts, that classifies what post belongs to what echo chamber. The label that appears will be generated by allowing users to vote on which echo chamber the post best fits in. The top voted tags will link users to a third party website, in which users can simulate feeds stuck in different echo chambers.</div>  
  <div class="grid-item title">Why it is Important</div>
  <div class="grid-item">Since the majority of Twitter users do not know they are in an echo chamber, raising awareness is a powerful step to helping people break out of thir situation. The mere repetition of seeing that one post after the next belongs to a certain perspective helps user become more self aware. More than this, the third party website helps users understand what a feed might look like in another chamber, which can promote empathy between people of different perspectives and bring awareness to why people think the way they do.</div>
  <div class="grid-item title">My Role</div>
  <div class="grid-item">I acted as the project manager and technical consult for this endeavor. I was in charge of interfacing with the team in order to make sure everything was on track, by sending emails, agendas, setting up research goals, and interfacing with external sources. I also provided feasability checks, as someone who has work experience in Artificial Intelligence.</div>
</div>
<h2>Want to take a deeper dive?</h2>
<button class="accordion" onclick="openAccordion(event)">The Problem Space &#9660;</button>
<div class="panel">
<p>Over the course of a semester, I participated in an in depth research study to understand some of the biases associated with Twitter. The first half of the semester was dedicated to learning the basis of the background of bias in social media, while the second half of the semester focused on the problem statement:</p>
<h1>How might we...</h1>
<h1>raise awareness about echo chambers among Twitter users and encourage them to break out of them?</h1>
</div>

<button class="accordion" onclick="openAccordion(event)">The Process &#9660;</button>
<div class="panel">
<p>Here, we investigated the way that people approach their feed in terms of how they create the balance of perspectives seen on their feed, the kinds of content curated, and how they evaluate the success of how well their feed is catered to their interests. By asking these kinds of questions and investigating larger studies, we were able to determine that there is a significant problem in Twitter’s feed curation, making people unaware of the fact that they are surrounded by only one perspective and become stuck in an echo chamber, where their potentially incomplete or incorrect beliefs are supported by confirmation biases.</p>
<div class="grid-container-interviews">
  <div class="grid-item-interviews title-interviews">4</div>
  <div class="grid-item-interviews">
  	<h2 class="interview">Think Aloud Protocols</h2>
    <p class="explanation">How users currently navigate their twitter feed</p>
  </div>
  <div class="grid-item-interviews title-interviews">4</div>  
  <div class="grid-item-interviews">
    <h2 class="interview">Semi-structured Interviews</h2>
    <p class="explanation">How users structure their feed </p></div>
  <div class="grid-item-interviews title-interviews">4</div>
  <div class="grid-item-interviews">
  	<h2 class="interview">Contextual Inquiries</h2>
    <p class="explanation">Artifact Analysis for how users deal with obvious echo chambers</p>
  </div>  
  <div class="grid-item-interviews title-interviews">4</div>
  <div class="grid-item-interviews">
  	<h2 class="interview">Speed Dating Sessions</h2>
    <p class="explanation">Possible echo chamber storyboard solutions</p>
  </div>
</div>

<br />
<h3>Putting it together:</h3>
<div style="display:flex; flex-direction: column; align-items: center;">
<img src="images/affinityMap.png" alt="affinity map of combined ideas" style="width: 80%;">
<p>Culmination of Research Methods: Affinity Map</p>
</div>
<br />
<div style="display:flex; flex-direction: column; align-items: center;">
<img src="images/quotes.png" alt="quotes to represent combined ideas" style="width: 50%;">
<p>Evidence: User quotes that map the journey of our solution</p>
</div>
<br />
<br />
<h3>Major Insights</h3>
<div class="flex">
<div class="grid-container-insights">
  <div class="grid-item-insights title-insights">1</div>
  <div class="grid-item-insights">Not all users want to break out of their echo chambers.</div>
  <div class="grid-item-insights title-insights">2</div>  
  <div class="grid-item-insights">Certain echo chambers might be productive and useful for Twitter users.</div>
  <div class="grid-item-insights title-insights">3</div>
  <div class="grid-item-insights">Users do not want to take on full responsibility for breaking out of their echo chambers and require some tool to support them.</div>
</div>
</div>
</div>

<button class="accordion" onclick="openAccordion(event)">The Solution &#9660;</button>
<div class="panel">
    <h2>The Plugin:</h2>
    <p>Users can enable a google chrome extension or a plugin for their phone, such that they can see labels appear over each Twitter post. This label will be generated by users voting for the relevant label for the post. The top voted label will show users what echo chamber they might belong to.</p>
    <p>When users go to vote, they can see the top rated labels will allow for low effort voting, but by clicking the “other” category users can put in their own idea for what echo chamber the post belongs to, which will be structured by type ahead suggestions. Only after users vote, will they be able to see the statistical breakdown of how others voted, such that they are not as influenced by other’s opinions.</p>
    <p>Users can also access the third party website for further explanation and exploration through these labels.</p>

    <div class="badseedRings" style="margin-top: 50px;">
        <div style="margin-right: 10%; display:flex; flex-direction: column; align-items: center;">
            <img src="images/pluginLabel.png" alt="our application before the user votes">
            <p>Top voted echo chamber label</p>
        </div>
        <div style="display:flex; flex-direction: column; align-items: center;">
            <img src="images/pluginVote.png" alt="our application after the user votes">
            <p>Seeing the statistics after voting</p>
        </div>
        </div>
        <br />
        <br />
        <h2>The Third Party Website (Twother):</h2>
        <p>After seeing the possible echo chambers that might be on their own feed, we wanted users to have a chance to explore what other echo chambers might be out there. Here, we are giving a user to see through the eyes of people who are apart of various echo chambers, to see the (tw)other perspective.</p>
        <p>Users can select multiple echo chambers at a time to see similarities to their own feed, such as in the prototype shown below.</p>
        <img src="images/thirdParty.png" alt="Twother Protottype" >
        <br />
        <br />
        <h3>Implications:</h3>
        <p>This project is the first step in helping people break out of their echo chambers. There is a gap in awareness of what people are consuming, but by showing them how deeply they are a part of this chamber, it can help people to be more cognizant of the types of media they are consuming.<p>
        <p>In future implementations, we would like to come up with webbed maps of people’s echo chambers, such that they can do even more self investigation and realize where they might compare to their friends or people they follow.</p>
        <p>The empathy aspect was also particularly important. Users reflected to us that they could not understand how someone could think a certain way. By having them experience the echo chambers of others, it can bring insights to why people think the way we do.</p>
        <p>Understanding is the first goal in helping people break out. This project accomplishes this bridge in comprehension in a way that harnesses the collective power of every day users in a low effort way that encourages a learning-first approach.</p>


</div>

</div>`


{/* <p>In the actual coding environment, it looks more like this:</p>
<iframe src="https://youtu.be/tzI4-smLNrA" width="700" height="145"></iframe> */}