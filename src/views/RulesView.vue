<template>
    <section class="rules-section">
        <router-link class="close-button" to="/">Back</router-link>
        <h1 class="primary-title rules-title">
            <span class="menu-item-icon rules-icon">
                <svg width="100%" height="100%" viewBox="0 0 17 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 2.5V17.5C0 18.163 0.263392 18.7989 0.732233 19.2678C1.20107 19.7366 1.83696 20 2.5 20H15.75C15.9489 20 16.1397 19.921 16.2803 19.7803C16.421 19.6397 16.5 19.4489 16.5 19.25C16.5 19.0511 16.421 18.8603 16.2803 18.7197C16.1397 18.579 15.9489 18.5 15.75 18.5H2.5C2.23478 18.5 1.98043 18.3946 1.79289 18.2071C1.60536 18.0196 1.5 17.7652 1.5 17.5H15.75C15.9489 17.5 16.1397 17.421 16.2803 17.2803C16.421 17.1397 16.5 16.9489 16.5 16.75V2.5C16.5 2.1717 16.4353 1.84661 16.3097 1.54329C16.1841 1.23998 15.9999 0.964379 15.7678 0.732233C15.5356 0.500087 15.26 0.315938 14.9567 0.190301C14.6534 0.0646644 14.3283 0 14 0H2.5C1.83696 0 1.20107 0.263392 0.732233 0.732233C0.263392 1.20107 0 1.83696 0 2.5ZM7 6.018C6.9953 6.21378 6.91421 6.39995 6.77407 6.53673C6.63392 6.67351 6.44583 6.75006 6.25 6.75C5.5 6.75 5.5 5.999 5.5 5.999V5.99C5.50053 5.94523 5.5032 5.90051 5.508 5.856C5.55224 5.46971 5.69706 5.10179 5.928 4.789C6.382 4.176 7.198 3.727 8.513 3.75C9.463 3.767 10.306 4.165 10.834 4.82C11.371 5.487 11.552 6.39 11.196 7.279C10.834 8.184 10.015 8.544 9.544 8.75L9.494 8.773C9.214 8.896 9.081 8.96 9.001 9.024L9 9.025V9.749C9.00013 9.94791 8.92124 10.1387 8.78068 10.2795C8.64013 10.4202 8.44941 10.4994 8.2505 10.4995C8.05159 10.4996 7.86077 10.4207 7.72002 10.2802C7.57928 10.1396 7.50013 9.94891 7.5 9.75V9C7.5 8.477 7.752 8.103 8.063 7.853C8.313 7.653 8.628 7.515 8.849 7.417L8.887 7.4C9.429 7.161 9.687 7.013 9.804 6.721C9.87268 6.56401 9.89616 6.39095 9.87178 6.22134C9.84739 6.05172 9.77612 5.89229 9.666 5.761C9.444 5.486 9.037 5.259 8.487 5.25C7.552 5.234 7.242 5.535 7.134 5.682C7.06248 5.77908 7.01641 5.89254 7 6.012V6.018ZM9.25 12.5C9.25 12.7652 9.14464 13.0196 8.95711 13.2071C8.76957 13.3946 8.51522 13.5 8.25 13.5C7.98478 13.5 7.73043 13.3946 7.54289 13.2071C7.35536 13.0196 7.25 12.7652 7.25 12.5C7.25 12.2348 7.35536 11.9804 7.54289 11.7929C7.73043 11.6054 7.98478 11.5 8.25 11.5C8.51522 11.5 8.76957 11.6054 8.95711 11.7929C9.14464 11.9804 9.25 12.2348 9.25 12.5Z" fill="#4F4E4E"/>
                </svg>    
            </span> RULES</h1>
        <div class="rules-section--articles-container">
            <article>
                <h2 class="secondary-title">At the start of game</h2>
                <p class="text-content">In the game Spyfall, players find themselves in a certain location.  At least one player is a spy who does not know the group's whereabouts.  After everyone knows their identity, start the timer.  Any player or spy begins to ask a random question to another player, who answers this question in any way he likes.  Now that player asks the next question, and so on.  The player who asked the last question can be interrogated immediately afterwards.</p>
            </article>
            <article>
                <h2 class="secondary-title">During de game</h2>
                <p class="text-content">The goal of the spy is to find out the location or survive undetected until the timer runs out.  The goal of the rest of the players is to find out who does not know the location and is therefore a spy.  So it's important to be smart about the questions you ask, because if you want to find out if another player is a spy, you can't reveal too much information to the real spy.  The spy must use the available information to vaguely answer questions and go unnoticed.  At any time during the game, a player can accuse another player of being a spy.  The timer stops and a vote is taken.  If everyone but the suspect agrees, the player's identity is revealed.  If he is a spy, the players win, otherwise the real spy wins.  If no consensus is reached, the game and the timer continue to run.</p>
            </article>
            <article>
                <h2 class="secondary-title">At the end of the game</h2>
                <p class="text-content">The game will end as soon as the timer runs out.  After that, the Spy has 10 seconds to exit and make a guess about the whereabouts of the players.  If the guess turns out to be wrong, then the spy loses, and if it turns out to be correct, he wins.  If the Spy chooses not to reveal himself, players can debate and vote on who they think is the Spy.  The player with the most votes is considered the party's chosen spy.  If the group guesses correctly, the group wins, otherwise the spy wins.</p>
            </article>  
        </div>
    </section>
</template>

<style scoped>

.rules-section {
    width: 100%;
    max-width: 450px;
    height: calc(100vh - 100px);
    background-color: var(--white-color);
    position: absolute;
    left: 0;
    top: 0;
    z-index: -1;
}
.close-button {
    display: inline;
    position: absolute;
    top: 10px;
    right: 0;
    font-size: 1.6rem;
    font-weight: bold;
    width: 60px;
    height: auto;
    padding: 2px;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    background-color: #FABABA;
    text-align: center;
    color: var(--black-color);
}
.rules-section--articles-container {
    display: flex;
    height: calc(100vh - 250px);
    overflow-y: scroll;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap: 26px;
}
.secondary-title {
    display: inline-block;
    font-size: 1.6rem;
    margin-bottom: 10px;
    padding: 4px;
    border-radius: 6px;
    background-color: var(--secondary-color);
}
.text-content {
    font-size: 1.3rem;
    line-height: 1.6rem;
    color: var(--black-color);
}
</style>