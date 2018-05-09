import { load } from "dotenv"
import { AssistantV1 } from 'watson-developer-cloud'

load()

export const assistant = new AssistantV1({
    username: process.env.WATSON_ASSISTANT_USERNAME,
    password: process.env.WATSON_ASSISTANT_PASSWORD,
    version: process.env.WATSON_ASSISTANT_VERSION
    });

export const workspace = process.env.WATSON_ASSISTANT_WORKSPACE

     
    