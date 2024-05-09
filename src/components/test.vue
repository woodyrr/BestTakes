<template>
    <!-- <div class="pt-6">
      <div v-for="poll in polls" :key="poll.id" class="text-white">
        <div class="flex flex-col gap-2 w-full px-[2%] lg:px-[9%]">
          <div class="text-[24px] font-semibold">{{ poll.title }}</div>
          <div>{{ poll.description }}</div>
          <div>1 live on this vote channel</div>
          <div v-if="poll.options" class="flex gap-20 pt-20">
            <div class="flex flex-col gap-5 lg:gap-10">
              <div v-for="option in poll.options" :key="option" class="text-[20px]">
                <button @click="voteForOption(poll.id, option)" class="flex gap-2 items-center">
                  <i class="fa-regular fa-circle"></i>
                  {{ option }}
                </button>
              </div>
            </div>
            <div class="border"></div>
            <div>
              Total Votes: {{ poll.votes.totalVotes }}
            </div>
          </div>
        </div>
      </div>
    </div> -->


    <div class="pt-6">
        <div v-for="item in takes" class=" text-white">
            <div class="flex flex-col gap-2 w-full px-[2%] lg:px-[9%]" v-if="item.id == route.params.id">
                <div class="text-[24px] font-semibold">
                    {{ item.title }}
                </div>
                <div>
                    {{ item.description }}
                </div>
                <div>
                    1 live on this vote channel
                </div>
                <div v-if="item.options" class="flex gap-20 pt-20">
                    <div class="flex flex-col gap-5 lg:gap-10">
                    <div v-for="option in item.options" :key="option" class="text-[20px]">
                        <button @click="voteForOption(item.id, option)" class="flex gap-2 items-center">
                        <i class="fa-regular fa-circle"></i>
                        {{ option }}
                        </button>
                    </div>
                    </div>
                    <div class="border"></div>
                    <div>
                    Total Votes: {{ item.votes.totalVotes }}
                    </div>
                </div>
            </div>
        </div>


        <!-- <div  v-for="poll in polls" class=" text-white">
            <div class="flex flex-col gap-2 w-full px-[2%] lg:px-[9%]">
                
                <div v-if="poll.options" class="flex gap-20 pt-20">
                    <div class="flex flex-col gap-5 lg:gap-10">
                    <div v-for="option in poll.options" :key="option" class="text-[20px]">
                        <button @click="voteForOption(poll.id, option)" class="flex gap-2 items-center">
                        <i class="fa-regular fa-circle"></i>
                        {{ option }}
                        </button>
                    </div>
                    </div>
                    <div class="border"></div>
                    <div>
                    Total Votes: {{ poll.votes.totalVotes }}
                    </div>
                </div>
            </div>
        </div> -->
    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { useRoute } from 'vue-router';
import db from '../main.js';
// import { collection, onSnapshot, doc, updateDoc } from "firebase/firestore";
import { collection,  orderBy, onSnapshot, doc, query , updateDoc} from "firebase/firestore"; 

const route = useRoute();
const polls = ref([]);

const voteForOption = async (pollId, option) => {
  const pollRef = doc(db, 'Votes', pollId);
  const pollSnapshot = await pollRef.get();
  const pollData = pollSnapshot.data();

  // Increment the vote count for the selected option
  pollData.options[option]++;

  // Update the poll document in Firestore
  await updateDoc(pollRef, pollData);
};

// onMounted(() => {
//   const voteCollection = collection(db, 'Votes');
//   const unsubscribe = onSnapshot(voteCollection, (snapshot) => {
//     polls.value = snapshot.docs.map((doc) => ({
//       id: doc.id,
//       description: doc.data().Description,
//       title: doc.data().title,
//       options: doc.data().options,
//       deadline: doc.data().endDate,
//       created: doc.data().date,
//       uid: doc.data().uid,
//       uicon: doc.data().uicon,
//       user: doc.data().user,
//       votes: doc.data().votes // Assuming votes are stored within the poll document
//     }));
//   });

//   // Unsubscribe from snapshot listener when component is unmounted
//   onUnmounted(unsubscribe);
// });


const takes = ref([]);

onMounted(() => {
const takeCollection = query(collection(db, 'Takes'), orderBy('date', 'desc'));

const unsubscribe = onSnapshot(takeCollection, (snapshot) => {
takes.value = snapshot.docs.map((doc) => ({
  id: doc.id,
  description: doc.data().Description,
  title: doc.data().title,
  options: doc.data().options,
  deadline:doc.data().endDate,
  created: doc.data().date,
  uid:doc.data().uid,
  uicon:doc.data().uicon,
  user:doc.data().user
  
}));




});
console.log(takes)
const voteCollection = query(collection(db, 'Votes'), orderBy('date', 'desc'));
const unsubscribe2 = onSnapshot(voteCollection, (snapshot) => {
    polls.value = snapshot.docs.map((doc) => ({
      id: doc.id,
      description: doc.data().Description,
      title: doc.data().title,
      options: doc.data().options,
      deadline: doc.data().endDate,
      created: doc.data().date,
      uid: doc.data().uid,
      uicon: doc.data().uicon,
      user: doc.data().user,
      votes: doc.data().votes // Assuming votes are stored within the poll document
    }));
  });
// Unsubscribe from snapshot listener when component is unmounted
onUnmounted(unsubscribe);
onUnmounted(unsubscribe2);
});



</script>