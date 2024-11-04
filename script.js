// Letter content variable
const letterContent = `
    <p>Dear Selina,</p>
    <p>Happy belated seven-month monthsary, my love! I can’t believe it’s already been seven months since we started this amazing journey together. I’m really sorry for being late with your gift. You know how life gets sometimes! I hope you can forgive me. Honestly, I just want to take a moment to say thank you for being the best girlfriend anyone could ever ask for. You really are incredible, and I mean that from the bottom of my heart.</p>
    <p>Thinking back to when we first started dating, it’s wild to see how far we’ve come. Neither of us had a clue what we were doing, did we? It felt a bit like we were just diving into the deep end without floaties! But somehow, we’ve managed to keep our heads above water, and I’m so grateful for that. You’ve been by my side through all the awkward moments, the excitement, and even the times when we didn’t quite know how to navigate this thing called love. And honestly, I can’t imagine my life without you now.</p>
    <p>There were definitely times when I worried if this was all too good to be true. I kept thinking, “Is this really happening?” There were moments I questioned if this was serious, or if you were just messing with my head. But as the days turned into weeks and then into months, it became clear that this was something special. You’re here for me—understanding, loving, and supporting me in ways I didn’t even know I needed. Even on those days when I’m super busy or when my mind is all over the place, you still manage to be there for me. Your patience blows me away, and it makes me appreciate you even more.</p>
    <p>What really gets me is how well you know me. If you asked my family or friends what I love the most, they probably wouldn’t have a clue. But you? You’ve taken the time to learn about me—my quirks, my dreams, even my weirdest interests. You see me for who I really am, and that’s something I’ve never had with anyone else. It’s like you’ve unlocked a part of me that I didn’t even know existed. That’s when I really understood how deep your love is for me, and I want you to know that I feel the same way about you.</p>
    <p>I know my family can be a bit tough about relationships like ours. They just don’t really get it, and honestly, that’s okay. I decided to be open about you with them because I want you to feel important in my life. You mean the world to me, and I’m willing to stand up for us, no matter what. No matter what challenges we face, I promise I’ll never let you go. You have my heart, Selina, and I love you more than words can say.</p>
    <p>You know, I also used to think that love was just a fairytale thing, something that only happened in movies. Sure, I’ve had crushes and flings, but nothing ever felt real until you came along. With those other people, it was like I was just going through the motions. But with you, everything is different. You’re special, but with you, everything is different. You’re special, and you’ve changed my perspective on love. You’ve made me want to be a better person, and I can’t thank you enough for that. I’ve learned to appreciate the little things more, to be kinder, and to open up about my feelings because of you.</p>
    <p>As we continue this journey together, I can’t help but feel excited about what the future holds for us. I know we’ll have our ups and downs, just like any couple, but I truly believe we can get through anything as long as we’re together. I want to keep building memories with you, going on adventures, and just enjoying every moment we have.</p>
    <p>So, here’s to many more months, years, and adventures together! Thank you for being you, Selina. I love you so much, and I can’t wait to see what our future holds.</p>
    <p>Forever yours,</p>
    <p>Hannah.</p>
`;

// Function to open the letter
function openLetter() {
    document.getElementById('letter-content').innerHTML = letterContent; // Insert the letter content
    document.getElementById('letter').style.display = 'block'; // Show the letter
    document.getElementById('flap').style.transform = 'rotateX(-180deg)'; // Open the flap
    document.getElementById('heart').style.opacity = 1; // Fade in the heart
    setTimeout(() => {
        document.getElementById('letter').classList.add('pop-out'); // Add pop-out animation
    }, 400); // Delay to sync with flap animation
}

// Function to close the letter
function closeLetter(event) {
    event.stopPropagation(); // Prevent the click event from bubbling up
    document.getElementById('letter').style.display = 'none'; // Hide the letter
    document.getElementById('flap').style.transform = 'rotateX(0deg)'; // Close the flap
    document.getElementById('heart').style.opacity = 0; // Hide the heart
}