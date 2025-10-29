import {FiHome, FiSettings, FiCalendar, FiMail, FiFileText} from 'react-icons/fi'
import { CogIcon } from '@sanity/icons'
import { GiGolfTee } from "react-icons/gi"
import { MdOutlineGolfCourse } from "react-icons/md"
import { TbBeerFilled } from "react-icons/tb"

import { StructureResolver  } from "sanity/structure"

export const studioStructure: StructureResolver = (S) =>
    S.list()
        .title('Websites')
        .items([
            S.listItem()
                .title('Golf Central')
                .icon(GiGolfTee)
                .child(
                    S.list()
                    .title('Golf Central')
                    .items([
                        // Pages for Golf Central
                        S.listItem()
                        .title('Pages')
                        .icon(FiFileText)
                        .child(
                        S.documentTypeList('page')
                            .title('Golf Central Pages')
                        ),
                        // Events for Golf Central
                        S.listItem()
                        .title('Events')
                        .icon(FiCalendar)
                        .child(
                        S.documentTypeList('event')
                            .title('Golf Central Events')
                        ),
                        // Settings for Golf Central
                        S.listItem()
                        .title('Settings')
                        .icon(CogIcon)
                        .child(S.editor().title('Golf Central Settings').schemaType('settings').documentId('settings')),
                    ])
                ),
            S.listItem()
                .title('Landers Pocket')
                .icon(MdOutlineGolfCourse)
                .child(
                    S.list()
                    .title('Landers Pocket')
                    .items([
                        // Pages for Golf Central
                        S.listItem()
                        .title('Pages')
                        .icon(FiFileText)
                        .child(
                        S.documentTypeList('lpPage')
                            .title('Landers Pocket Pages')
                        ),
                         // Settings for Landers Pocket
                         S.listItem()
                         .title('Settings')
                         .icon(CogIcon)
                         .child(S.editor().title('Landers Pocket Settings').schemaType('settings').documentId('settings')),
                    ])
                ),
            S.listItem()
                .title('4 Pines')
                .icon(TbBeerFilled)
                .child(
                    S.list()
                    .title('4 Pines')
                    .items([
                        // Pages for Golf Central
                        S.listItem()
                        .title('Pages')
                        .icon(FiFileText)
                        .child(
                        S.documentTypeList('fpPage')
                            .title('4 Pines Pages')
                        ),
                         // Settings for 4 Pines
                        S.listItem()
                        .title('Settings')
                        .icon(CogIcon)
                        .child(S.editor().title('4 Pines Settings').schemaType('settings').documentId('settings')),
                    ])
                ),
        ])
            