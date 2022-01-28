let bubbles = `	<br />
<br />
<div class="projSpecificHeader">
<img class="projSpecificBadseedimg" src="images/bubbles.png" alt="">
  <div class="projSpecificDesc">
  <h2>Bubbles</h2>
  <p>Do you feel your anxiety bubbling to the surface? Do you tend to catastrophize and think of the worst-case scenario? You are not alone. Try Bubbles, a self-help mobile application that lets you express your emotions freely and supports your mental wellbeing. Bubbles is here as a virtual friend to listen, be a part of your struggles and help you take a step back and put your situation into perspective.</p>
</div>
</div>	
<div class="deepdive">
<div class="grid-container">
  <div class="grid-item title">The problem</div>
  <div class="grid-item">Many people who have generalized anxiety disorder also suffer from catastropic thinking as a product of their anxiety. People with this disorder often do not have the resources to distance themselves from their fears.</div>
  <div class="grid-item title">The Goal</div>  
  <div class="grid-item">Support people with generalized axiety disorder by giving them a way to sort out their catastrophized scenario even when a medical professional is not immediately available.</div>
  <div class="grid-item title">The Solution</div>
  <div class="grid-item">We created an application that employs psychological distancing to combat the current catastrophy. By creating a friendly chat app, the bot walks users through their current concern and identifies what might be causing the worry. Users are asked to iterate through explaining why something happened in serious and silly (distancing) ways. </div>  
  <div class="grid-item title">Why it is Important</div>
  <div class="grid-item">While there are resources to help people manage their anxiety, much of therapy relies of people practicing outside of sessions. By giving people support tools, it can alleviate feeling completely alone when one does not have access to a therapist. Catastrophic thinking can lead to terrifying behaviors and thoughts: any impact we can make is important.</div>
  <div class="grid-item title">My Role</div>
  <div class="grid-item">This was a special project for me because I came up with the distancing idea: having a background in cognitive science, I could see psychological concepts come to life. I also was the sole developer on this team and had never created a mobile application before. I learned so much, and we were one of the winners for this month long hackathon!</div>
</div>
<h2>Want to take a deeper dive?</h2>

<button class="accordion" onclick="openAccordion(event)">The Research &#9660;</button>
<div class="panel">
<p>When we started talking about ways to boost mental health and break down existing barriers in this space, we took inspiration from issues that we personally experienced. The one that resonated with us the most was the anxiety caused by catastrophic thinking. It was an everyday behavior that all of us engaged in, which often further escalated our levels of stress and anxiety. Through research, we found we were not alone. Many people, if not everyone, experience catastrophic thinking. When dealing with stressors, people sometimes go down rabbit holes and start ruminating on the worst possible scenarios. This experience can be very overwhelming and can cause people to quickly spiral into negative thoughts.</p>
<p>Catastrophic thinking is a critical behavior to address because if people engage in it repeatedly, it can lead or contribute to depression. Various studies have shown that catastrophic thinking is associated with anxiety disorders and depression. If we can help people address this line of thinking properly early on, we could prevent it from developing into serious mental health illnesses. </p>
<p>We were also inspired by research on Generalized Anxiety Disorder in the facet of Catastrophic Thinking. We analyzed clinical strategies of employing cognitive behavioral approaches to dealing with anxiety. We noticed that a significant amount of these approaches employ the Elaboration Likelihood Model. This model explains that we have two methods of processing information: the first of which is the common route for people with anxiety: they process their world quickly and without much deep thought. The goal is to bring those people to the other line of thinking: processing consciously and with purpose. We also investigated distancing, which is the idea that when people fictionalize and/or step away from their problems, creating psychological distance, they are able to better handle painful subjects and can decrease the impact of obstacles. By combining these ideas by asking users to process their anxieties more deeply and take a step back from these obstacles in an embedded design approach, we can help users deal with their anxieties in healthy and effective ways.</p>
</div>

<button class="accordion" onclick="openAccordion(event)">The App &#9660;</button>
<div class="panel">
<div class="badseedRings" style="margin-top: 50px;">
    <div>
        <p>Our app Bubbles breaks the loop of catastrophic thinking by enabling users to distance themselves from the anxiety-causing situation through fictionalization. By putting their feelings and situations into words — almost like having a conversation with a close friend, our app provides an opportunity for people to process the situation from a more cognitively distanced, third-person perspective. </p>
        <p>Bubbles prompts users to engage with their experiences using mad libs — a word prompt game in which the user is given random words to incorporate into their storyline. Using mad libs to reframe the situation in a fun, lighthearted way, we aim to help people shift their focus from catastrophizing the situation and see their experience more clearly. </p>
    </div>
    <img src="images/bubblesChat.png" alt="chatbot example" style="width: 40%; margin-left: 10%;">
</div>

<br />
<h3>How we built it:</h3>
<div class="badseedRings" style="margin-top: 10px;">
    <p>To accomplish this through the design-side, we used a chatbot system to have a chatbot almost ‘mimic’ a close friend to let the person vent out their true emotions and sort out their thoughts. The chat continues until the person feels like they are organized with their thoughts and then the story gets saved into a section of emotions such as anxiety, anger, etc. The user can scroll through their saved history of emotional discussions to reflect on their past experiences. In order to achieve this through the technical side, we used React-Native and Dialogflow to pick out the essential packages to use in our chatbot system. Inside ReactNative, we used the Gifted Chat UI to tune out details of the design we agreed on. </p>
    <img src="images/bubblesTools.png" alt="react native and dialogflow symbols" class="agentBadSeed">
</div>
<br />
<p>Here is a link to the github repository</p>
<a class="link--page" style="color: #56af78;" href="https://github.com/claracoo/bubblesReactNative">https://github.com/claracoo/bubblesReactNative</a>
<br />
</div>

<button class="accordion" onclick="openAccordion(event)">Presenting the App &#9660;</button>
<div class="panel">
    <div class="badseedRings" style="margin-top: 50px;">
        <div style="margin-right: 10%;">
            <img src="images/bubblesPresenting.png" alt="4 screens of our app">
        </div>
        <div>
            <p>Currently, our prototype is designed for all populations who have gone through emotional hardships. But one of the next steps we envision for Bubbles is making it context specific. As an example, we believe this application will be particularly useful for college freshmen who are in a transitory phase of their life and are very likely to experience a lot of different anxiety inducing situations for the first time. Specifically for these college students, we want to add prompts and questions that are more relevant to their experiences like test taking, job hunt etc. We believe making Bubbles context-specific will further enhance its value by directly targeting the needs of its actual users.</p>
            <p>Also, we believe that we could take advantage of the collective power to overcome mental health. If fictionalization allowed people to distance themselves from their catastrophic thinking, sharing their thoughts with others could help them view their problems objectively and prohibit them from overstating their situation. To lower the barriers of sharing their private stories, people can share them anonymously. Also, by viewing others’ stories, people could consider that they are not the only ones that are suffering from those negative feelings which could be a turning point for them to find ways to deal with those feelings.</p>
        </div>
    </div>
    <p>We were also able to create a concept video to better articulate the way in which our app makes an important contribution to the world of mental health.</p>
    <a class="link--page" style="color: #56af78;" href="https://youtu.be/0QA4bN-K9Kk">https://youtu.be/0QA4bN-K9Kk</a>


</div>

</div>`


{/* <p>In the actual coding environment, it looks more like this:</p>
<iframe src="https://youtu.be/tzI4-smLNrA" width="700" height="145"></iframe> */}