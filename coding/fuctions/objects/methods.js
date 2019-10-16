restaurent = {
  name: "vwhjghb",
  guestCapacity: 75,
  guestCount: 0,
  checkAvalability: function(partySize) {
    let seatLeft = this.guestCapacity - this.guestCount;
    return partySize <= seatLeft;
  },
  seatParty: function(partySize) {
    this.guestCount = this.guestCount + partySize;
  },
  removeParty: function(partySize) {
    this.guestCount = this.guestCount - partySize;
  }
};
restaurent.seatParty(72)
console.log(restaurent.checkAvalability(4));
restaurent.removeParty(5)
console.log(restaurent.checkAvalability(4));
