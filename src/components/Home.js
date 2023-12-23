//libraries
import * as React from "react";
import {
  Appbar,
  Text,
  TextInput,
  Card,
  Button,
  Icon,
  Divider,
  Surface,
} from "react-native-paper";
import {
  View,
  ScrollView,
  StyleSheet,
  Dimensions,
  ViewBase,
  Image,
  TouchableOpacity,
} from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons/faChevronRight";

//responsive
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const HomeComponent = () => {
  return (
    <ScrollView style={styles.bgWhite}>
      {/* Nav Bar */}
      <Appbar.Header style={[styles.bgWhite, styles.navContainer]}>
        <View style={[styles.navRow]}>
          <Image source={require("../img/logo.jpg")} style={styles.logo} />
          <Image
            source={require("../img/profile.png")}
            style={styles.profile}
          />
        </View>
      </Appbar.Header>
      <Divider elevation={2} style={styles.navDividerColor} />

      {/* Report & Tickets */}
      <View style={[, styles.cardContainer, styles.surfaceRow]}>
        <TouchableOpacity style={[styles.surface, styles.surfaceMargin1]}>
          <Surface
            style={[styles.surface, styles.bgWhite, styles.border]}
            elevation={2}
          >
            <Image
              source={require("../img/report.png")}
              style={styles.reportIcon}
            />
            <Text>Report</Text>
          </Surface>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.surface, styles.surfaceMargin2]}>
          <Surface
            style={[styles.surface, styles.bgWhite, styles.border]}
            elevation={2}
          >
            <Image
              source={require("../img/tickets.png")}
              style={styles.ticketIcon}
            />
            <Text>Tickets</Text>
          </Surface>
        </TouchableOpacity>
      </View>

      {/* Ticket Request */}
      <View style={[styles.requestContainer, styles.row]}>
        <View>
          <Text variant="titleLarge">Ticket Request</Text>
          <Text variant="bodyMedium" style={styles.greyColor}>
            Create and track ticket requests
          </Text>
        </View>
        <TouchableOpacity
          style={[styles.requestBtn, styles.row]}
          onPress={() => {}}
          textColor="black"
        >
          <Text> New Request</Text>
          <FontAwesomeIcon icon={faChevronRight} color="black" />
        </TouchableOpacity>
      </View>

      {/* Ticket Status */}
      <View style={styles.statusContainer}>
        <Text variant="titleLarge" style={styles.ticketStatuspadding}>
          Ticket Status
        </Text>
        <View style={[styles.ticketStatus]}>
          <Text variant="bodyLarge">TCKid1234</Text>
          <Text variant="bodyMedium" style={styles.greyColor}>
            Your request form has been delivered
          </Text>
          <View style={styles.btnEnd}>
            <TouchableOpacity
              style={[styles.btnBorder, styles.textCenter]}
              onPress={() => {}}
              textColor="black"
            >
              <Text variant="bodyMedium">View</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={[styles.ticketStatus]}>
          <Text variant="bodyLarge">TCKid1234</Text>
          <Text variant="bodyMedium" style={styles.greyColor}>
            Your request form has been delivered
          </Text>
          <View style={styles.btnEnd}>
            <TouchableOpacity
              style={[styles.btnBorder, styles.textCenter]}
              onPress={() => {}}
              textColor="black"
            >
              <Text variant="bodyMedium">View</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

// StyleSheet
const styles = StyleSheet.create({
  bgWhite: {
    backgroundColor: "#ffffff",
  },
  shadow: {
    elevation: 5,
  },
  navRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  profile: {
    justifyContent: "flex-end",
    marginEnd: windowWidth * 0.02,
    width: windowWidth * 0.111,
    height: windowHeight * 0.052,
  },
  logo: {
    width: windowWidth * 0.35,
    height: windowHeight * 0.03,
    justifyContent: "flex-start",
    marginStart: windowWidth * 0.02,
  },
  navDividerColor: {
    backgroundColor: "#E9EBF8",
  },
  navContainer: {
    height: windowHeight * 0.1,
  },
  surfaceRow: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: windowHeight * 0.12,
  },
  surfaceMargin1: {
    marginStart: windowWidth * 0.05,
  },
  surfaceMargin2: {
    marginEnd: windowWidth * 0.05,
  },
  surface: {
    height: windowHeight * 0.15,
    width: windowHeight * 0.2,
    alignItems: "center",
    justifyContent: "center",
  },
  border: {
    borderWidth: 0.5,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderTopLeftRadius: 10,
    borderColor: "#E9EBF8",
  },
  cardContainer: {
    height: windowHeight * 0.18,
  },
  reportIcon: {
    width: windowWidth * 0.1,
    height: windowHeight * 0.042,
    marginBottom: windowHeight * 0.01,
  },
  ticketIcon: {
    width: windowWidth * 0.1,
    height: windowHeight * 0.043,
    marginBottom: windowHeight * 0.01,
  },
  requestContainer: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    paddingHorizontal: windowWidth * 0.03,
    paddingVertical: windowHeight * 0.025,
  },
  greyColor: {
    color: "#989FAD",
  },
  requestBtn: {
    borderWidth: 1,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderTopLeftRadius: 5,
    width: windowWidth * 0.3,
    height: windowHeight * 0.04,
    borderColor: "black",
    backgroundColor: "white",
    paddingHorizontal: windowWidth * 0.01,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  ticketStatus: {
    borderBottomWidth: 1,
    paddingTop: windowHeight * 0.025,
    paddingBottom: windowHeight * 0.01,
    marginHorizontal: windowWidth * 0.04,
    borderColor: "#D0D3D9",
  },
  ticketStatuspadding: {
    paddingHorizontal: windowWidth * 0.04,
  },
  statusContainer: {
    paddingVertical: windowHeight * 0.02,
  },
  btnBorder: {
    borderWidth: 0,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderTopLeftRadius: 5,
    width: windowWidth * 0.13,
    height: windowHeight * 0.035,
    backgroundColor: "#F0F1F3",
  },
  textCenter: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  btnEnd: {
    alignItems: "flex-end",
  },
});

export default HomeComponent;
