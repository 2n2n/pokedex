import ButtonComponent from "./ButtonComponent";
import CounterLabelComponent from "./CounterLabelComponent";
import styles from "./CounterComponent.module.css";

const CounterComponent = () => {
  return (
    <div className={styles.card + " card mt-5"} style={{ width: "300px" }}>
      <div class="card-header">Counter Component</div>
      <div class="card-body">
        <blockquote class="blockquote mb-0">
          <CounterLabelComponent />
          <footer>
            <ButtonComponent />
          </footer>
        </blockquote>
      </div>
    </div>
  );
};

export default CounterComponent;
