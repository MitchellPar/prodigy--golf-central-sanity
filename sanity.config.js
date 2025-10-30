import { GiGolfTee } from "react-icons/gi";
import { webhooksTrigger } from 'sanity-plugin-webhooks-trigger'
import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import {studioStructure} from './studio/structure'

export default defineConfig({
  name: 'default',
  title: 'prodigy--golf-central-sanity',

  projectId: '7s3l82i3',
  dataset: 'production',

  plugins: [
    structureTool({
      name: 'golf-central',
      title: 'Golf Central',
      icon: GiGolfTee,
      structure: studioStructure
    }), 
    visionTool(),  
    webhooksTrigger({
      title: 'Deploys',
      text: 'Webhooks for website deployment.',
      encryptionSalt: 'cceb3eadf707fa29c304d378b35ad1ada22fd930bde28b2a7c5e7982c57c4fc393c6054839bd8eeab9ee194b21e9d911ac8b9ef6b5e20b98f53aa5c67b140e18',
      /** You can customize the event type name to trigger on your Github workflows */
      githubEventType: 'webhook-trigger',
    })
  ],

  schema: {
    types: schemaTypes,
  },

  // Enable auto-updates for studios
  autoUpdates: true,
})
