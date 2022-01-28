let badseed = `						<br />
<br />
<div class="projSpecificHeader">
<img class="projSpecificBadseedimg" src="images/brookhaven.png" alt="">
  <div class="projSpecificDesc">
  <h2>Bad Seed</h2>
  <p> Bad Seed is an artificial intelligence based autonomous scheduler used at Brookhaven National Laboratory (BNL) in the National Synchrotron Lightsource II. As with the majority of technology used at BNL, there is no such thing as “optimized enough”. The only thing holding back science is time and resources, so, by working on this project, I hoped to mitigate some of those limitations.</p>
</div>
</div>	
<div class="deepdive">
<div class="grid-container">
  <div class="grid-item title">The problem</div>
  <div class="grid-item">Beamlines generate an enormous amount of data, much of which needs to be remeasured in order to create clear data. Originally, clearer data was gathered by remeasuring all samples 100 times. </div>
  <div class="grid-item title">The Goal</div>  
  <div class="grid-item">Get an algorithm to learn when to remeasure unclear samples (aka bad seeds) and reduce time dedicated to remeasuring samples.</div>
  <div class="grid-item title">The Solution</div>
  <div class="grid-item">I used human psychology reward schedules in a custom Python TensorFlow environment to find bad seeds, using an Advantage Actor Critic agent. </div>  
  <div class="grid-item title">Why it is Important</div>
  <div class="grid-item">I was able to improve the amount of measurements by ten times. It means that the beamline scientist does not have to spend as much time glued to the beamline, looking at how clear the rings are on a sample, and can dedicate themselves to other work.</div>
  <div class="grid-item title">My Role</div>
  <div class="grid-item">I was the front runner on this project, and was mentored extensively by Daniel Olds and Joshua Lynch. I created my own environment and lead the research in terms of determining the reward system, structuring the goals for the algorithm to acheive, and designing an associated interface.
This research was taken and included in larger projects at the beamlines, such as “Gamifying the Beamline”.</div>
</div>
<h2>Want to take a deeper dive?</h2>

<button class="accordion" onclick="openAccordion(event)">The Problem &#9660;</button>
<div class="panel">
<p>At the beamlines, samples frequently need to be remeasured in order to make sure that we can get a clear  reading on them. But there is so much data generated in even one sample reading! How can we know which need to be remeasured?</p>
<div class="badseedRings">
    <div style="margin-right: 10%; display: flex; flex-direction: column; align-items: center;">
        <img src="images/clearSample.png" alt="clear Beamline reading">
        <p>Clear Sample</p>
    </div>
    <div style="display: flex; flex-direction: column; align-items: center;">
        <img src="images/fuzzySample.png" alt="fuzzy Beamline reading">
        <p>Unclear Sample (notice the fuzzy rings)</p>
    </div>
</div>
<p>The original answer: Just measure all of them 100 times!</p>
<p>Well... that wastes a lot of time....</p>
</div>

<button class="accordion" onclick="openAccordion(event)">The Process &#9660;</button>
<div class="panel">
<div class=" picking badseedRings" style="margin-top: 50px;">
    <div style="display: flex; flex-direction: column; align-items: center; margin-right: 10%; width: 100%;">
        <img src="images/badseedBears.png" alt="visualization of reward system" style="width: 70%">
        <p>Reward System Visualization</p>
    </div>
    <p>The goal is to get an agent (the computer’s decisions) to learn the rules of a particular environment. The environment will reward or penalize the agent for its decisions. For example, one of the requirements for our environment is that we do not want the agent to pick the same sample over and over again. It might look something like this:</p>
</div>

<br />
<h3>Picking and Agent:</h3>
<div class=" picking badseedRings" style="margin-top: 10px;">
    <img src="images/agent.png" alt="graph of different agents' abilities to learn" class="agentBadSeed">
        <p>
            Based on previous experimentation with cartpole and other basic reinforcement learning paradigms, the two agents that seemed most promising were the Advantage Actor Critic Algorithm (A2C) and the Double Deep Q-Learning (DDQN) algorithms. After testing on similar environments to the one described above, A2c seemed like the best choice because it learned faster:</p>
</div>
<br />
<h3>Environment Goals:</h3>
<ol>
    <li>Getting the agent to choose the sample with the highest standard deviation</li>
    <li>Getting the agent to discover all of the bad seeds, not just one</li>
</ol>
</div>

<button class="accordion" onclick="openAccordion(event)">The Solution &#9660;</button>
<div class="panel">
    <div class="badseedRings" style="margin-top: 50px;">
        <div style="margin-right: 10%;">
            <img src="images/goal1.png" alt="a graph showing how goal 1 was achieved">
            <p>Goal 1 achieved by rewarding choosing the sample with the highest deviation</p>
        </div>
        <div>
            <img src="images/goal2.png" alt="a graph showing how goal 2 was achieved">
            <p>Goal 2 achieved by penalizing for repeating a sample</p>
        </div>
    </div>
    <h3>Verifying the Solution</h3>
    <p>In the following graphs, we plotted the range of measurements for 10 samples. The taller the shape representing each sample, the higher the standard deviation. The higher standard deviation represents a Bad Seed, which my system will hopefully find. The initial system measured each of the 10 samples 100 times, while my system took only 100 measurements over all. Using manual systems, we know that samples 0,2, and 8 are the ones with the highest standard deviation and are therefore the "bad seeds". Hopefully, my system will also identify these 3 as the same bad seeds.</p>
    <div class="badseedRings" style="margin-top: 50px;">
        <div style="margin-right: 10%;">
            <img src="images/originalSys.png" alt="a graph showing original system" >
            <p>The original system measured each of these 10 samples 100 times (total 1000 measurements), and it picked out these 3 bad seeds</p>
        </div>
        <div>
            <img src="images/mySys.png" alt="a graph my system">
            <p>My system took a total of 100 for all of the 10 samples, and it was able to pick out the same 3 bad seeds</p>
        </div>
    </div>
    <p>This accomplishment was particularly exciting because it narrowed down the time by a factor of 10, which means that beamline scientists do not have to painstakingly check every sample or rope someone into taking 100 measurements of each sample, they can allow the system to choose for them which ones need remeasuring!</p>
</div>

<button class="accordion" onclick="openAccordion(event)">Further Resources &#9660;</button>
<div class="panel">
    <br />
    <p>This work is featured in this article:</p>
    <a class="link--page" style="color: #56af78;" href="https://iopscience.iop.org/article/10.1088/2632-2153/abc9fc/pdf">https://iopscience.iop.org/article/10.1088/2632-2153/abc9fc/pdf</a>
    <br />
    <p>For a specialized report on the specific work done to complete the project, please read:</p>
    <a class="link--page" style="color: #56af78;" href="https://drive.google.com/file/d/1FUCtx72FnDm6gyakxc_htkzvooM9sN-m/view?usp=sharing">https://drive.google.com/file/d/1FUCtx72FnDm6gyakxc_htkzvooM9sN-m/view?usp=sharing</a>
    <br />
    <p>It can also be summarized by the following poster, which was presented on the SULI Symposium for the National Synchrotron Light Source II:</p>
    <a class="link--page" style="color: #56af78;" href="https://drive.google.com/file/d/1CsBQ0MGqiX8qP-ZjDgeAfuaB1RT17KMp/view?usp=sharing">https://drive.google.com/file/d/1CsBQ0MGqiX8qP-ZjDgeAfuaB1RT17KMp/view?usp=sharing</a>
    <br />
    <p>The code dedicated to building this tool:</p>
    <a class="link--page" style="color: #56af78;" href="https://github.com/claracoo/bad_seed">https://github.com/claracoo/bad_seed</a>
    <br />
    <p>The design structure for a possible front end interface:/p>
    <a class="link--page" style="color: #56af78;" href="https://www.figma.com/file/zcFOWq9VgoGqo0tZ4Gb0ns/SULI_Design?node-id=0%3A1">https://www.figma.com/file/zcFOWq9VgoGqo0tZ4Gb0ns/SULI_Design?node-id=0%3A1</a>

</div>

</div>`


{/* <p>In the actual coding environment, it looks more like this:</p>
<iframe src="https://youtu.be/tzI4-smLNrA" width="700" height="145"></iframe> */}