import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, ScrollView } from 'react-native';

const App = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <Text style={styles.greeting}>Hi, Irvan Moses</Text>
        <Text style={styles.balance}>Rp 12.000.000</Text>
        <Text style={styles.balanceLabel}>Saldo Tersedia</Text>
      </View>

      {/* Actions Section */}
      <View style={styles.actionsContainer}>
        <ActionButton label="Transfer" icon="💸" />
        <ActionButton label="Payment" icon="💳" />
        <ActionButton label="Information" icon="ℹ️" />
        <ActionButton label="E-Money" icon="💰" />
        <ActionButton label="Commerce" icon="🛒" />
        <ActionButton label="More" icon="➕" />
      </View>

      {/* Transactions Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Transaksi Terakhir</Text>
        <TransactionItem account="8800886668" name="A.Yani" amount="- Rp 3.000.000" />
        <TransactionItem account="8800886668" name="Toko Bagus" amount="+ Rp 7.000.000" />
      </View>

      {/* Promo Section */}
      <View style={styles.promoContainer}>
        <Image
          source={{ uri: 'https://example.com/disney-hotstar.png' }} // Replace with actual promo image URL
          style={styles.promoImage}
        />
        <View style={styles.promoContent}>
          <Text style={styles.promoTitle}>Disney + Hotstar</Text>
          <Text style={styles.promoSubtitle}>Discount up to 50%</Text>
          <TouchableOpacity style={styles.promoButton}>
            <Text style={styles.promoButtonText}>Beli Sekarang</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

// Custom components for reusability
const ActionButton = ({ label, icon }: { label: string; icon: string }) => (
  <TouchableOpacity style={styles.actionButton}>
    <Text style={styles.actionIcon}>{icon}</Text>
    <Text style={styles.actionLabel}>{label}</Text>
  </TouchableOpacity>
);

const TransactionItem = ({ account, name, amount }: { account: string; name: string; amount: string }) => (
  <View style={styles.transactionItem}>
    <Text style={styles.transactionAccount}>{account}</Text>
    <Text style={styles.transactionName}>{name}</Text>
    <Text style={[styles.transactionAmount, { color: amount.includes('-') ? 'red' : 'green' }]}>{amount}</Text>
  </View>
);

// Styles
const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#f0f4f8',
    padding: 16,
  },
  header: {
    backgroundColor: '#2f5dcb',
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
  },
  greeting: {
    fontSize: 18,
    color: 'white',
    fontWeight: '500',
  },
  balance: {
    fontSize: 28,
    color: 'white',
    fontWeight: 'bold',
  },
  balanceLabel: {
    fontSize: 12,
    color: 'white',
    marginTop: 4,
  },
  actionsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginVertical: 20,
  },
  actionButton: {
    width: '30%',
    backgroundColor: 'white',
    paddingVertical: 16,
    borderRadius: 10,
    alignItems: 'center',
    marginVertical: 8,
  },
  actionIcon: {
    fontSize: 24,
  },
  actionLabel: {
    fontSize: 12,
    marginTop: 4,
    color: '#333',
  },
  section: {
    marginVertical: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  transactionItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    padding: 12,
    borderRadius: 8,
    marginVertical: 4,
  },
  transactionAccount: {
    fontSize: 12,
    color: '#888',
  },
  transactionName: {
    fontSize: 14,
    color: '#333',
  },
  transactionAmount: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  promoContainer: {
    flexDirection: 'row',
    backgroundColor: '#FFF',
    padding: 12,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 20,
  },
  promoImage: {
    width: 60,
    height: 60,
    borderRadius: 8,
    marginRight: 12,
  },
  promoContent: {
    flex: 1,
  },
  promoTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  promoSubtitle: {
    fontSize: 12,
    color: '#888',
    marginVertical: 4,
  },
  promoButton: {
    backgroundColor: '#2f5dcb',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
  },
  promoButtonText: {
    color: 'white',
    fontSize: 12,
  },
});

export default App;
