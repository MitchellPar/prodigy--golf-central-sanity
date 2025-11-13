// documents
import page from './documents/page'
import lpPage from './documents/lp-page'
import fpPage from './documents/fp-page'
import gcEvent from './documents/event'
import fpEvent from './documents/fp-event'
// import news from './documents/news'
// import publications from './documents/publications'
// import interactiveData from './documents/interactiveData'
// import videosPodcasts from './documents/videosPodcasts'
// import author from './documents/author'
// import advisoryBoard from './documents/advisoryBoard'
// import event from './documents/event'
// import project from './documents/project'
// import trainingPack from './documents/trainingPack'
// import resource from './documents/resource'
// import resourceCategory from './documents/resourceCategory'
// import team from './documents/team'

// singletons
import settings from './singletons/settings'
import lpSettings from './singletons/lp-settings'
import fpSettings from './singletons/fp-settings'

// objects
// import projectBlocks from './projectBlocks'
import blockBuilder from './blockBuilder'
import link from './link'

// blocks
import hero from './blocks/hero'
import imageTextSplit from './blocks/imageTextSplit'
import featureText from './blocks/featureText'
import events from './blocks/events'
import slider from './blocks/slider'
import banner from './blocks/banner'
import cta from './blocks/cta'
import sliderFull from './blocks/sliderFull'
import imageThreeTile from './blocks/imageThreeTile'
import ctaSmall from './blocks/ctaSmall'
import sliderSmall from './blocks/sliderSmall'
import splitImage from './blocks/splitImage'
import sliderEvents from './blocks/sliderEvents'
import faq from './blocks/faq'
import featureImage from './blocks/featureImage'
import contact from './blocks/contact'
import golf from './blocks/golf'
import membership from './blocks/membership'
import functionEmail from './blocks/functionEmail'
import sessions from './blocks/sessions'
import headerNav from './blocks/headerNav'
import footerNav from './blocks/footerNav'
import mapCta from './blocks/mapCta'
import functions from './blocks/functions'
import contentBlock from './blocks/contentBlock'
import functionSingle from './blocks/functionSingle'



import seo from './seo'

const documents = [page, lpPage, fpPage, gcEvent, fpEvent]
const singletons = [settings, lpSettings, fpSettings]
const objects = [blockBuilder, link, seo]
const blocks = [
    hero, 
    imageTextSplit,
    featureText,
    featureImage,
    events,
    slider,
    banner,
    cta,
    sliderFull,
    imageThreeTile,
    ctaSmall,
    sliderSmall,
    splitImage,
    sliderEvents,
    faq,
    contact,
    golf,
    membership,
    functionEmail,
    sessions,
    headerNav,
    footerNav,
    mapCta,
    functions,
    contentBlock,
    functionSingle,
]


export const schemaTypes = [...documents, ...singletons, ...objects, ...blocks]
