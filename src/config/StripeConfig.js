import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe("pk_test_51STM6ADbwpl2PPAzEgsFSJmvquLCWxXCA9OVpJOv9MxqF3bHSROL2eBvUR0WDCPXCSrEF1uD4LhSjyeRpEmn0XGJ00F9Gr64Eq");

export default stripePromise;