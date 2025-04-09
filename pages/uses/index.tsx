import React from 'react'
import styles from './Uses.module.css' // Import CSS Module

function Uses() {
  return (
    <div className={styles.usesContainer}>
      <br />
      <p>
        I often get asked about my computing setup—my computers, the software I run on them, how I
        host my services, and other choices of personal technology. This is a relatively up-to-date
        list detailing what I’m currently using.
      </p>
      <br />

      <section>
        <h4>hardware</h4>
        <ul>
          <li>
            <strong>Laptop</strong>: MacBook Pro M4
          </li>
          <li>
            <strong>Keyboard</strong>: Keychron K6
            <ul>
              <li>Switches: Gateron Milky Yellow Pro v2</li>
              <li>Mods: Tape Mod, Foam Mod</li>
            </ul>
          </li>
        </ul>
      </section>

      <section>
        <h4>software</h4>
        <ul>
          <li>
            <strong>Window Manager</strong>: Aerospace
          </li>
          <li>
            <strong>Terminal</strong>: Kitty
          </li>
          <li>
            <strong>Text Editors</strong>:
            <ul>
              <li>Main: Neovim (nvim)</li>
              <li>Secondary: VSCode, Zed</li>
            </ul>
          </li>
          <li>
            <strong>Password Manager</strong>: Bitwarden
          </li>
          <li>
            <strong>Notes</strong>: Obsidian
          </li>
          <li>
            <strong>Reminders</strong>: TickTick and Apple Reminders
          </li>
          <li>
            <strong>Calendar</strong>: Apple Calendar
          </li>
          <li>
            <strong>Browser</strong>: Chrome
          </li>
        </ul>
      </section>

      <section>
        <h4>cli</h4>
        <ul>
          <li>
            <strong>Shell</strong>: zsh
          </li>
          <li>
            <strong>Terminal Multiplexer</strong>: tmux
          </li>
          <li>
            <strong>Directory Navigation</strong>: zoxide
          </li>
          <li>
            <strong>Fuzzy Finder</strong>: fzf
          </li>
          <li>
            <strong>Other</strong>: bat, fd, rg, exa, pnpm
          </li>
        </ul>
      </section>
    </div>
  )
}

export default Uses
