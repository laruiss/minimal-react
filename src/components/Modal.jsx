import './Modal.css'

export function Modal ({ children, title }) {
  return (
    <>
      <div className="overlay"></div>
      <div className="modal">
        <div className="modal__container">
          <div className="modal__content">
            <h2 className="title">{title}</h2>
            {children}
          </div>
        </div>
      </div>
    </>
  )
}