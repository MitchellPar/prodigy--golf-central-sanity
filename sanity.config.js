import { GiGolfTee } from "react-icons/gi";
import {media} from 'sanity-plugin-media'
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

  plugins: [structureTool({
    name: 'golf-central',
    title: 'Golf Central',
    icon: GiGolfTee,
    structure: studioStructure
  }), visionTool(), media()],

  schema: {
    types: schemaTypes,
  },

  // Enable auto-updates for studios
  autoUpdates: true,
})
