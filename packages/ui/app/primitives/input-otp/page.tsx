"use client";

import * as React from "react";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
  InputOTPSeparator,
} from "../../../components/primitives";
import styles from "./page.module.css";

export default function InputOTPPage() {
  const [value, setValue] = React.useState("");

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Input OTP</h1>
        <p className={styles.description}>
          Accessible one-time password component with copy paste functionality.
        </p>
      </div>

      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>Basic Usage</h2>
        <p className={styles.sectionDescription}>
          A simple 6-digit OTP input.
        </p>
        <div className={styles.preview}>
          <InputOTP maxLength={6}>
            <InputOTPGroup>
              <InputOTPSlot index={0} />
              <InputOTPSlot index={1} />
              <InputOTPSlot index={2} />
              <InputOTPSlot index={3} />
              <InputOTPSlot index={4} />
              <InputOTPSlot index={5} />
            </InputOTPGroup>
          </InputOTP>
        </div>
      </div>

      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>With Separator</h2>
        <p className={styles.sectionDescription}>
          Use the separator to create visual groupings.
        </p>
        <div className={styles.preview}>
          <InputOTP maxLength={6}>
            <InputOTPGroup>
              <InputOTPSlot index={0} />
              <InputOTPSlot index={1} />
              <InputOTPSlot index={2} />
            </InputOTPGroup>
            <InputOTPSeparator />
            <InputOTPGroup>
              <InputOTPSlot index={3} />
              <InputOTPSlot index={4} />
              <InputOTPSlot index={5} />
            </InputOTPGroup>
          </InputOTP>
        </div>
      </div>

      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>4-Digit PIN</h2>
        <p className={styles.sectionDescription}>
          Shorter 4-digit verification code.
        </p>
        <div className={styles.preview}>
          <InputOTP maxLength={4}>
            <InputOTPGroup>
              <InputOTPSlot index={0} />
              <InputOTPSlot index={1} />
              <InputOTPSlot index={2} />
              <InputOTPSlot index={3} />
            </InputOTPGroup>
          </InputOTP>
        </div>
      </div>

      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>Controlled</h2>
        <p className={styles.sectionDescription}>
          Track the OTP value with state.
        </p>
        <div className={styles.preview}>
          <div className={styles.controlledDemo}>
            <InputOTP
              maxLength={6}
              value={value}
              onChange={(value) => setValue(value)}
            >
              <InputOTPGroup>
                <InputOTPSlot index={0} />
                <InputOTPSlot index={1} />
                <InputOTPSlot index={2} />
                <InputOTPSlot index={3} />
                <InputOTPSlot index={4} />
                <InputOTPSlot index={5} />
              </InputOTPGroup>
            </InputOTP>
            <div className={styles.valueDisplay}>
              <span className={styles.valueLabel}>Current value:</span>
              <code className={styles.valueCode}>{value || "(empty)"}</code>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>Verification Form Example</h2>
        <div className={styles.preview}>
          <div className={styles.verificationForm}>
            <div className={styles.verificationHeader}>
              <h3 className={styles.verificationTitle}>Enter verification code</h3>
              <p className={styles.verificationDescription}>
                We&apos;ve sent a 6-digit code to your email address.
              </p>
            </div>
            <InputOTP maxLength={6}>
              <InputOTPGroup>
                <InputOTPSlot index={0} />
                <InputOTPSlot index={1} />
                <InputOTPSlot index={2} />
              </InputOTPGroup>
              <InputOTPSeparator />
              <InputOTPGroup>
                <InputOTPSlot index={3} />
                <InputOTPSlot index={4} />
                <InputOTPSlot index={5} />
              </InputOTPGroup>
            </InputOTP>
            <p className={styles.resendText}>
              Didn&apos;t receive a code? <a href="#" className={styles.resendLink}>Resend</a>
            </p>
          </div>
        </div>
      </div>

      <div className={styles.componentsUsed}>
        <h3>Components Used</h3>
        <ul>
          <li>InputOTP</li>
          <li>InputOTPGroup</li>
          <li>InputOTPSlot</li>
          <li>InputOTPSeparator</li>
        </ul>
      </div>
    </div>
  );
}

