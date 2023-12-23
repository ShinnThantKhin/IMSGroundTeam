// libraries
import * as React from "react";
import {
  Appbar,
  Text,
  TextInput,
  Card,
  Button,
  IconButton,
  Divider,
} from "react-native-paper";
import {
  View,
  ScrollView,
  StyleSheet,
  Dimensions,
  ViewBase,
  TouchableOpacity,
} from "react-native";
import { SelectList } from "react-native-dropdown-select-list";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons/faChevronLeft";
import HomeComponent from "./Home";

//responsive
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export const TicketComponent = () => {
  //textinput values
  const [item, setItem] = React.useState("");
  const [quantity, setQuantity] = React.useState("");
  const [unit, setUnit] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [note, setNote] = React.useState("");

  //item data
  const data = [
    { key: "1", value: "Item A" },
    { key: "2", value: "Item B" },
    { key: "3", value: "Item C" },
    { key: "4", value: "Item D" },
    { key: "5", value: "Item E" },
    { key: "6", value: "Item F" },
    { key: "7", value: "Item E" },
  ];

  return (
    <ScrollView>
      {/* header */}
      <Appbar.Header style={[styles.bgWhite]}>
        <TouchableOpacity style={styles.backIcon}>
          <FontAwesomeIcon icon={faChevronLeft} size={23} color="#5D6679" />
        </TouchableOpacity>
        <Appbar.Content title="Ticket Request" />
      </Appbar.Header>
      <Divider elevation={4} style={styles.dividerColor} />

      {/* container */}
      <View style={styles.container}>
        <View>
          {/* Request Item & add new request */}
          <View style={styles.row}>
            <Text
              variant="titleLarge"
              style={[styles.textBold, styles.textCenter]}
            >
              Request Items
            </Text>
            <Button
              mode="contained-tonal"
              icon="plus"
              onPress={() => {}}
              style={styles.button}
              labelStyle={{ color: "white" }}
            >
              Add More
            </Button>
          </View>
        </View>

        {/* Card */}
        <Card style={[styles.cardContainer]} elevation={4}>
          <Card.Content style={styles.cardContent}>
            {/* Delete & Write Icons */}
            <View style={styles.icon}>
              <IconButton
                icon="delete"
                iconColor={"white"}
                size={15}
                onPress={() => {}}
                style={styles.iconColor}
              />
              <IconButton
                icon="pencil"
                iconColor={"white"}
                size={15}
                onPress={() => {}}
                style={styles.iconColor}
              />
            </View>
            {/* Item Selection */}
            <View>
              <Text variant="titleMedium" style={styles.textMargin}>
                Item Name
              </Text>
              <SelectList
                setSelected={(item) => setItem(item)}
                data={data}
                save="value"
                placeholder="Select Item"
              />
            </View>
            {/* Quantity & Unit */}
            <View style={styles.row}>
              <View style={styles.rowChild1}>
                <Text variant="titleMedium" style={styles.textMargin}>
                  Request Quantity
                </Text>
                <TextInput
                  placeholder="Enter quantity"
                  placeholderTextColor={"grey"}
                  value={quantity}
                  onChangeText={(quantity) => setQuantity(quantity)}
                  style={[styles.bgWhite, styles.border]}
                  underlineColor="transparent"
                  cursorColor="black"
                  activeUnderlineColor="transparent"
                />
              </View>
              <View style={styles.rowChild2}>
                <Text variant="titleMedium" style={styles.textMargin}>
                  Unit
                </Text>
                <TextInput
                  placeholder="Enter unit"
                  placeholderTextColor={"grey"}
                  value={unit}
                  onChangeText={(unit) => setUnit(unit)}
                  style={[styles.bgWhite, styles.border]}
                  underlineColor="transparent"
                  cursorColor="black"
                  activeUnderlineColor="transparent"
                />
              </View>
            </View>
            {/* Description */}
            <Text variant="titleMedium" style={styles.textMargin}>
              Description
            </Text>
            <TextInput
              placeholder="Enter description"
              placeholderTextColor={"grey"}
              value={description}
              onChangeText={(description) => setDescription(description)}
              style={[styles.bgWhite, styles.border]}
              underlineColor="transparent"
              cursorColor="black"
              activeUnderlineColor="transparent"
            />
          </Card.Content>
        </Card>
        {/* Note */}
        <View style={styles.noteContainer}>
          <Text variant="titleMedium" style={styles.textMargin}>
            Note
          </Text>
          <TextInput
            placeholder="Enter note"
            placeholderTextColor={"grey"}
            value={note}
            onChangeText={(note) => setNote(note)}
            style={[styles.bgWhite, styles.border]}
            underlineColor="transparent"
            cursorColor="black"
            activeUnderlineColor="transparent"
          />
        </View>
      </View>
      {/* Confirm Btn */}
      <View style={[styles.btnContainer, styles.bottom]}>
        <View style={[styles.btnRow]}>
          <Button
            style={[styles.btnColor1, styles.btnBorder]}
            onPress={() => {}}
            textColor="black"
          >
            Discard
          </Button>
          <Button
            style={[styles.btnColor2, styles.btnBorder]}
            onPress={() => {}}
            textColor="white"
          >
            Confirm
          </Button>
        </View>
      </View>
    </ScrollView>
  );
};

// Style Sheet
const styles = StyleSheet.create({
  container: {
    padding: windowWidth * 0.03,
    flex: 1,
    backgroundColor: "#ffffff",
  },
  cardContainer: {
    flex: 1,
    marginHorizontal: windowWidth * 0.001,
    paddingHorizontal: windowWidth * 0.001,
    backgroundColor: "#ffffff",
  },
  row: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    marginVertical: windowHeight * 0.02,
  },
  rowChild1: {
    flex: 1,
    marginEnd: windowWidth * 0.03,
  },
  rowChild2: {
    flex: 1,
    marginStart: windowWidth * 0.03,
  },
  button: {
    backgroundColor: "black",
    color: "white",
  },
  textMargin: {
    marginBottom: windowHeight * 0.01,
  },
  textBold: {
    fontWeight: "bold",
  },
  textCenter: {
    textAlign: "center",
  },
  bgWhite: {
    backgroundColor: "#ffffff",
  },
  shadow: {
    elevation: 3,
  },
  icon: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  iconColor: {
    backgroundColor: "black",
  },
  cardContent: {
    marginBottom: windowHeight * 0.02,
  },
  placeholderColor: {
    placeholderTextColor: "grey",
  },
  border: {
    flex: 1,
    borderWidth: 1,
    height: windowHeight * 0.05,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderTopLeftRadius: 10,
    borderColor: "grey",
  },
  btnBorder: {
    borderWidth: 1,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderTopLeftRadius: 10,
    width: windowWidth * 0.45,
  },
  btnColor1: {
    borderColor: "black",
    backgroundColor: "white",
  },
  btnColor2: {
    borderColor: "transparent",
    backgroundColor: "#93BDF8",
  },
  btnContainer: {
    flex: 1,
    justifyContent: "flex-end",
  },
  btnRow: {
    paddingHorizontal: windowWidth * 0.03,
    backgroundColor: "#F0F1F3",
    height: windowHeight * 0.13,
    flexGrow: 1,
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  noteContainer: {
    marginTop: windowHeight * 0.003,
    marginBottom: windowHeight * 0.25,
    padding: windowWidth * 0.03,
    flex: 1,
  },
  bottom: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
  },
  dividerColor: {
    backgroundColor: "#E9EBF8",
  },
  backIcon: {
    width: windowWidth*0.05,
    marginStart: windowWidth*0.02,
    marginEnd: windowWidth*0.05
  }
});

export default TicketComponent;
