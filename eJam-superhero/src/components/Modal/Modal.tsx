import { forwardRef, useEffect, useRef, useState } from "react";
import "./Modal.css";
import { iSuperhero } from "../../interfaces/iSuperhero";

interface ModalProps {
  onSubmitModal: (form: iSuperhero) => void;
}

const Modal = forwardRef<HTMLDivElement, ModalProps>(
  ({ onSubmitModal }, ref) => {
    const buttonRef = useRef<HTMLButtonElement>(null);

    const [form, setForm] = useState<iSuperhero>({
      name: "",
      power: "",
      humilityScore: 0,
    });

    useEffect(() => {
      console.log(form);
      const isCompleteForm = checkCompleteForm();
      isCompleteForm
        ? buttonRef.current?.classList.remove("disabled")
        : buttonRef.current?.classList.add("disabled");
    }, [form]);

    const closeModal = () => {
      if ((ref as React.RefObject<HTMLDivElement>).current) {
        setForm({ name: "", power: "", humilityScore: 0 });
        if (typeof ref === "function") {
          ref(null);
        } else if (ref && "current" in ref && ref.current) {
          ref.current.classList.toggle("closed");
        }
      }
    };

    const typeInForm = (e: React.ChangeEvent<HTMLInputElement>) => {
      setForm({
        ...form,
        [e.target.name]: e.target.value,
      });
    };

    const inputNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
      let value = e.target.value;
      if (!isNaN(Number(value)) && Number(value) > 0 && Number(value) <= 10) {
        if (value.length > 1 && value[0] == "0") {
          console.log(value);
          value = value[1];
          e.target.value = value;
        }
        setForm({
          ...form,
          [e.target.name]: value,
        });
      } else {
        e.target.value = "";
        setForm({
          ...form,
          [e.target.name]: "",
        });
      }
    };

    const checkCompleteForm = () => {
      if (form.name && form.power && form.humilityScore) {
        return true;
      }
      return false;
    };

    const handleSubmit = () => {
      const body: iSuperhero = { ...form };
      setForm({ name: "", power: "", humilityScore: 0 });
      onSubmitModal(body);
      closeModal();
    };

    return (
      <div
        id="modal"
        className="closed"
        ref={ref}
      >
        <div className="modal-container">
          <h2>Create a superhero</h2>
          <div className="form">
            <div className="formLine">
              <label htmlFor="name">Superhero's name</label>
              <input
                name="name"
                type="text"
                placeholder="Insert the superhero's name"
                onChange={typeInForm}
                value={form.name}
              />
            </div>
            <div className="formLine">
              <label htmlFor="power">Superhero's power</label>
              <input
                name="power"
                type="text"
                placeholder="Insert the superhero's power"
                onChange={typeInForm}
                value={form.power}
              />
            </div>
            <div className="formLine">
              <label htmlFor="power">Superhero's humility score (1 - 10)</label>
              <input
                name="humilityScore"
                type="text"
                placeholder="Insert the superhero's humility score (1 - 10)"
                onChange={inputNumber}
                value={form.humilityScore}
              />
            </div>

            <button
              onClick={() => handleSubmit()}
              ref={buttonRef}
            >
              Send
            </button>
          </div>

          <span
            className="closeButton"
            onClick={closeModal}
          >
            ✖
          </span>
        </div>
      </div>
    );
  }
);

export default Modal;
