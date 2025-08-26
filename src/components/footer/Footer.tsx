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
    href: "https://www.linkedin.com/in/jacktbg/",
  },
  {
    id: 2,
    component: GithubIcon,
    alt: "github",
    className: styles.gitHub,
    href: "https://github.com/jacktbg",
  },
  {
    id: 3,
    component: InstagramIcon,
    alt: "instagram",
    className: styles.instagram,
    href: "https://www.instagram.com/justjack_jj/",
  },
  {
    id: 4,
    component: WhatsappIcon,
    alt: "whatsapp",
    className: styles.whatsapp,
    href: "https://wa.me/51946757814",
  },
]
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div>
        @2024 <span className={styles.span}>jacktbg</span>{" "}
        all rights reserved
      </div>
      <ul className={styles.ul}>
        {icons.map((icon) => {
          const IconComponent = icon.component
          return (
            <li key={icon.id} className={styles.li}>
              <a
                className={styles.iconWrapper}
                href={icon.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconComponent className={icon.className} />
              </a>
            </li>
          )
        })}
      </ul>
    </footer>
  )
}

export default Footer
