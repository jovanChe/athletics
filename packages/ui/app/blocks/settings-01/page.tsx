"use client";

import * as React from "react";
import {
  Button,
  Input,
  Label,
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  Separator,
  Switch,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  Textarea,
} from "../../../components/primitives";
import styles from "./page.module.css";

export default function Settings01Page() {
  const [name, setName] = React.useState("John Doe");
  const [email, setEmail] = React.useState("john@example.com");
  const [notifications, setNotifications] = React.useState({
    email: true,
    push: false,
    marketing: true,
  });

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Settings 01</h1>
        <p className={styles.description}>
          User settings page with tabs for profile, notifications, and security.
        </p>
      </div>

      <div className={styles.preview}>
        <div className={styles.settingsContainer}>
          <Tabs defaultValue="profile" className={styles.tabs}>
            <TabsList className={styles.tabsList}>
              <TabsTrigger value="profile">Profile</TabsTrigger>
              <TabsTrigger value="notifications">Notifications</TabsTrigger>
              <TabsTrigger value="security">Security</TabsTrigger>
            </TabsList>

            <TabsContent value="profile">
              <Card>
                <CardHeader>
                  <CardTitle>Profile</CardTitle>
                  <CardDescription>
                    Manage your public profile information.
                  </CardDescription>
                </CardHeader>
                <CardContent className={styles.formContent}>
                  <div className={styles.field}>
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className={styles.field}>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className={styles.field}>
                    <Label htmlFor="bio">Bio</Label>
                    <Textarea
                      id="bio"
                      placeholder="Tell us about yourself..."
                      rows={4}
                    />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button>Save changes</Button>
                </CardFooter>
              </Card>
            </TabsContent>

            <TabsContent value="notifications">
              <Card>
                <CardHeader>
                  <CardTitle>Notifications</CardTitle>
                  <CardDescription>
                    Configure how you receive notifications.
                  </CardDescription>
                </CardHeader>
                <CardContent className={styles.notificationContent}>
                  <div className={styles.notificationItem}>
                    <div className={styles.notificationInfo}>
                      <Label htmlFor="email-notif">Email Notifications</Label>
                      <p className={styles.notificationDesc}>
                        Receive notifications via email.
                      </p>
                    </div>
                    <Switch
                      id="email-notif"
                      checked={notifications.email}
                      onCheckedChange={(checked) =>
                        setNotifications({ ...notifications, email: checked })
                      }
                    />
                  </div>
                  <Separator />
                  <div className={styles.notificationItem}>
                    <div className={styles.notificationInfo}>
                      <Label htmlFor="push-notif">Push Notifications</Label>
                      <p className={styles.notificationDesc}>
                        Receive push notifications on your device.
                      </p>
                    </div>
                    <Switch
                      id="push-notif"
                      checked={notifications.push}
                      onCheckedChange={(checked) =>
                        setNotifications({ ...notifications, push: checked })
                      }
                    />
                  </div>
                  <Separator />
                  <div className={styles.notificationItem}>
                    <div className={styles.notificationInfo}>
                      <Label htmlFor="marketing-notif">Marketing Emails</Label>
                      <p className={styles.notificationDesc}>
                        Receive emails about new features and offers.
                      </p>
                    </div>
                    <Switch
                      id="marketing-notif"
                      checked={notifications.marketing}
                      onCheckedChange={(checked) =>
                        setNotifications({ ...notifications, marketing: checked })
                      }
                    />
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="security">
              <Card>
                <CardHeader>
                  <CardTitle>Security</CardTitle>
                  <CardDescription>
                    Manage your account security settings.
                  </CardDescription>
                </CardHeader>
                <CardContent className={styles.formContent}>
                  <div className={styles.field}>
                    <Label htmlFor="current-password">Current Password</Label>
                    <Input id="current-password" type="password" />
                  </div>
                  <div className={styles.field}>
                    <Label htmlFor="new-password">New Password</Label>
                    <Input id="new-password" type="password" />
                  </div>
                  <div className={styles.field}>
                    <Label htmlFor="confirm-password">Confirm New Password</Label>
                    <Input id="confirm-password" type="password" />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button>Update password</Button>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>

      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>Components Used</h2>
        <ul className={styles.featureList}>
          <li>Tabs, TabsList, TabsTrigger, TabsContent - for tabbed navigation</li>
          <li>Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter</li>
          <li>Button - for save actions</li>
          <li>Input - for text fields</li>
          <li>Textarea - for bio field</li>
          <li>Label - for form field labels</li>
          <li>Switch - for notification toggles</li>
          <li>Separator - for visual dividers</li>
        </ul>
      </div>
    </div>
  );
}

