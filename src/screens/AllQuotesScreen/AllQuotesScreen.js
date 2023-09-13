/* eslint-disable react/style-prop-object */
import React, { useRef, useState } from 'react';
import {
  ActivityIndicator,
  Dimensions,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { useSelector } from 'react-redux';
import { useQuery, useQueryClient, useMutation } from '@tanstack/react-query';
import { SafeAreaView } from 'react-native-safe-area-context';
import Carousel from 'react-native-reanimated-carousel';
import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient';
import { deleteQuoteRequest, getAllQuotesRequest } from 'Q/services/quote';
import useRefreshOnFocus from 'Q/hooks/useRefreshOnFocus';
import OnboardingModal from 'Q/components/modals/OnboardingModal/OnboardingModal';
import CreateQuoteModal from 'Q/components/modals/CreateQuoteModal/CreateQuoteModal';
import PlusIcon from 'Q/assets/images/icons/PlusIcon.svg';
import RocketIcon from 'Q/assets/images/icons/RocketIcon.svg';
import colors from 'Q/assets/Colors';
import Quote from './Quote/Quote';
import Pagination from './Pagination/Pagination';
import styles from './styles';

const AllQuotesScreen = ({ navigation }) => {
  const { width } = Dimensions.get('window');

  const isSeen = useSelector((state) => state.onboard.isSeen);

  const carouselRef = useRef(null);

  const queryClient = useQueryClient();

  const [defaultPage, setDefaultPage] = useState(0);
  const [isCreateQuoteModalVisible, setIsCreateQuoteModalVisible] =
    useState(false);
  const [isOnboardingModalVisible, setIsOnboardingModalVisible] =
    useState(true);

  const getAllQuotes = useQuery({
    queryKey: ['quotes'],
    queryFn: () => getAllQuotesRequest(),
    onSuccess: () => {
      // console.log('Response:', data);
    },
    onError: () => {
      // console.log('Error:', error);
    },
  });

  const { mutate: deleteQuote } = useMutation({
    mutationFn: (data) => deleteQuoteRequest(data),
    onSuccess: () => {
      // console.log('Response:', data);
      queryClient.invalidateQueries('quotes');
    },
    onError: () => {
      // console.log('Error:', error);
    },
  });

  useRefreshOnFocus(getAllQuotes.refetch);

  if (getAllQuotes.isInitialLoading) {
    return (
      <SafeAreaView
        edges={['top', 'right', 'left']}
        style={styles.safeAreaViewContainer}
      >
        <LinearGradient
          colors={[colors.codGray, colors.rhino]}
          end={[0, 1.6]}
          start={[0, 0]}
          style={styles.loadingContainer}
        >
          <ActivityIndicator size="large" color={colors.chantilly} />
          <StatusBar style="light" />
        </LinearGradient>
      </SafeAreaView>
    );
  }

  if (getAllQuotes.isError) {
    return (
      <SafeAreaView
        edges={['top', 'right', 'left']}
        style={styles.safeAreaViewContainer}
      >
        <LinearGradient
          colors={[colors.codGray, colors.rhino]}
          end={[0, 1.6]}
          start={[0, 0]}
          style={styles.errorContainer}
        >
          <RocketIcon />
          <Text style={styles.errorText}>Huston we have a problem!</Text>
          <Text style={styles.errorText}>Something went wrong...</Text>
          <StatusBar style="light" />
        </LinearGradient>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView
      edges={['top', 'right', 'left']}
      style={styles.safeAreaViewContainer}
    >
      <LinearGradient
        colors={[colors.codGray, colors.rhino]}
        end={[0, 1.6]}
        start={[0, 0]}
        style={styles.gradientContainer}
      >
        <Text style={styles.title}>Quotes</Text>
        <View style={styles.carouselContainer}>
          <Carousel
            ref={carouselRef}
            mode="parallax"
            showLength
            pagingEnabled
            defaultIndex={0}
            loop={false}
            width={width}
            autoPlay={false}
            data={getAllQuotes.data}
            scrollAnimationDuration={1000}
            onScrollEnd={() => {
              setDefaultPage(carouselRef.current?.getCurrentIndex());
            }}
            renderItem={({ item }) => (
              <Quote
                defaultPage={defaultPage}
                data={getAllQuotes.data}
                deleteQuote={deleteQuote}
                getAllQuotes={getAllQuotes}
                item={item}
                navigation={navigation}
                numberOfQuotes={getAllQuotes.data.length}
              />
            )}
          />
        </View>
        <Pagination defaultPage={defaultPage} getAllQuotes={getAllQuotes} />
        <TouchableOpacity
          onPress={() => setIsCreateQuoteModalVisible(true)}
          style={styles.plusIconContainer}
        >
          <PlusIcon />
        </TouchableOpacity>
      </LinearGradient>
      <CreateQuoteModal
        modalVisible={isCreateQuoteModalVisible}
        setModalVisible={setIsCreateQuoteModalVisible}
      />
      {!isSeen && (
        <OnboardingModal
          isOnboardingModalVisible={isOnboardingModalVisible}
          setIsOnboardingModalVisible={setIsOnboardingModalVisible}
        />
      )}
      <StatusBar style="light" />
    </SafeAreaView>
  );
};

export default AllQuotesScreen;
