import streamDeck, { LogLevel } from "@elgato/streamdeck";

import { PowerAction } from "./actions/power-action";

// We can enable "trace" logging so that all messages between the Stream Deck, and the plugin are recorded. When storing sensitive information
streamDeck.logger.setLevel(LogLevel.TRACE);

// Register the power action.
streamDeck.actions.registerAction(new PowerAction());

// Finally, connect to the Stream Deck.
streamDeck.connect();
