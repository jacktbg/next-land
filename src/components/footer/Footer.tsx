import React from "react"
import styles from "./footer.module.css"
import {
  GithubIcon,
  InstagramIcon,
  LinkedinIcon,
  WhatsappIcon,
} from "@/icons/Icons"

const icons = [
  {
    id: 1,
    component: LinkedinIcon,
    alt: "linkedin",
    className: styles.linkedIn,
  },
  {
    id: 2,
    component: GithubIcon,
    alt: "github",
    className: styles.gitHub,
  },
  {
    id: 3,
    component: InstagramIcon,
    alt: "instagram",
    className: styles.instagram,
  },
  {
    id: 4,
    component: WhatsappIcon,
    alt: "whatsapp",
    className: styles.whatsapp,
  },
]
const Footer = () => {
  return (
    <div className={styles.footer}>
      <div>@2024 jacktbg all rights reserved</div>
      <ul className={styles.ul}>
        {icons.map((icon) => {
          const IconComponent = icon.component
          return (
            <li key={icon.id} className={styles.li}>
              <IconComponent className={icon.className} />
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Footer
