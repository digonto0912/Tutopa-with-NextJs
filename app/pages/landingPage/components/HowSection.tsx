'use client'

import React from "react"
import "../styles/HowSection.css"

const HowSection = () => {

  // Parent Side
  const openParentCart = (e: React.MouseEvent<HTMLDivElement>) => {

    // Geting the clicked & parent element
    const clickedBtn = e.target as HTMLElement
    const btnParent = clickedBtn.parentElement
    if (!clickedBtn.classList.contains("how-item-toggle")) return;

    // Active the card
    btnParent?.classList?.add('active')

    // Remove other active card
    const how_parent_items = document.querySelectorAll('.parent')
    const how_parent_images = document.querySelectorAll('.parent-img')

    how_parent_items.forEach((el) => {
      if (el !== btnParent) {
        el.classList.remove('active')
      }
    })

    const img_id = clickedBtn?.id + "-img"
    const img = document.getElementById(img_id)

    how_parent_images.forEach((el) => {
      if (el !== img) {
        el.classList.remove('active')
      } else {
        img.classList.add("active")
      }
    })

  };
  
  // Child Side
  const openChildCart = (e: React.MouseEvent<HTMLDivElement>) => {

    // Geting the clicked & parent element
    const clickedBtn = e.target as HTMLElement
    const btnParent = clickedBtn.parentElement
    if (!clickedBtn.classList.contains("how-item-toggle")) return;

    // Active the card
    btnParent?.classList?.add('active')

    // Remove other active card
    const how_child_items = document.querySelectorAll('.child')
    const how_child_images = document.querySelectorAll('.child-img')

    how_child_items.forEach((el) => {
      if (el !== btnParent) {
        el.classList.remove('active')
      }
    })

    // Showing & hidding side images
    const img_id = clickedBtn?.id + "-img"
    const img = document.getElementById(img_id)

    how_child_images.forEach((el) => {
      if (el !== img) {
        el.classList.remove('active')
      } else {
        img.classList.add("active")
      }
    })
  }


  return (
    <div className="how-section">
      <div className="container">
        <h2 className="section-title">How Tutopa Works</h2>
        <p className="section-description">
          Discover the easy steps to get started and boost your
          child&#39;s education
        </p>
        <div className="how-container">
          <div className="how-wrapper">
            <div className="how-left">
              <div className="how-image-wrapper">
                <p className="how-image-text">
                  <span>Parent&#39;s</span><br />Side
                </p>
                <img src="./images/img-how-parent-1.png" alt="" id="parent-1-img" className="parent-img how-image active" />
                <img src="./images/img-how-parent-2.png" alt="" id="parent-2-img" className="parent-img how-image" />
                <img src="./images/img-how-parent-3.png" alt="" id="parent-3-img" className="parent-img how-image" />
                <div className="ball-bg"></div>
              </div>
            </div>
            <div className="how-right">
              <div className="how-item parent active" onClick={openParentCart}>
                <button type="button" className="how-item-toggle" id="parent-1">
                  Sign Up: Create a parent account.
                </button>
                <div className="how-item-body" id="parent-1">
                  <p id="parent-1">
                    Stay on top of your learning with easy
                    access to your assigned tasks and
                    progress tracking. Review your completed
                    tasks, celebrate your achievements, and
                    keep striving for excellence.
                  </p>
                </div>
              </div>
              <div className="how-item parent " typeof="button" onClick={openParentCart}>
                <button type="button" className="how-item-toggle" id="parent-2">
                  Add Your Child: Enter Your Child&#39;s Details.
                </button>
                <div className="how-item-body" id="parent-2">
                  <p id="parent-2">
                    Connect with your child&#39;s learning
                    journey by adding them to your account.
                    Provide them with their unique login
                    details to access their tasks and track
                    their progress.
                  </p>
                </div>
              </div>
              <div className="how-item parent " onClick={openParentCart}>
                <button type="button" className="how-item-toggle" id="parent-3">
                  Track Progress and Stay Engaged: Monitor
                  your child&#39;s progress.
                </button>
                <div className="how-item-body" id="parent-3">
                  <p id="parent-3">
                    Review completed tasks, and engage with
                    their learning process. Stay connected
                    with their education and support their
                    growth every step of the way.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="how-wrapper secOne">
            <div className="how-left">
              <div className="how-item child active" onClick={openChildCart}>
                <button type="button" className="how-item-toggle " id="child-1">
                  LOG IN: ENTER YOUR PRE-MADE DETAILS.
                </button>
                <div className="how-item-body" id="child-1">
                  <p id="child-1">
                    Take charge of your learning by
                    accessing your account. Dive into your
                    assigned tasks, track your progress, and
                    unlock your potential with personalised
                    learning.
                  </p>
                </div>
              </div>
              <div className="how-item child" onClick={openChildCart}>
                <button type="button" className="how-item-toggle" id="child-2">
                  COMPLETE TASKS: TAKE ON YOUR ASSIGNED TASKS.
                </button>
                <div className="how-item-body" id="child-2">
                  <p id="child-2">
                    Immerse yourself in engaging tasks
                    designed by Tutopa. Complete
                    assignments, explore learning resources,
                    and grow your skills with us.
                  </p>
                </div>
              </div>
              <div className="how-item child" onClick={openChildCart}>
                <button type="button" className="how-item-toggle" id="child-3">
                  ACCESS YOUR WORK: REVIEW ANY INCORRECT
                  ANSWERS.
                </button>
                <div className="how-item-body" id="child-3">
                  <p id="child-3">
                    Stay on top of your learning with easy
                    access to your assigned tasks and
                    progress tracking. Review your completed
                    tasks, celebrate your achievements, and
                    keep striving for excellence.
                  </p>
                </div>
              </div>
            </div>
            <div className="how-right">
              <div className="how-image-wrapper">
                <p className="how-image-text">
                  <span>Child&#39;s</span><br />Side
                </p>
                <img src="./images/img-how-child-1.png" alt="" id="child-1-img" className="child-img how-image active" />
                <img src="./images/img-how-child-2.png" alt="" id="child-2-img" className=" child-img how-image"  />
                <img src="./images/img-how-child-3.png" alt="" id="child-3-img" className=" child-img how-image"  />
                <div className="ball-bg-2"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default HowSection;