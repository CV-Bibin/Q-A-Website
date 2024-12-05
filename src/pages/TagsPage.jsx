import React, { useState, useEffect } from 'react';
import LeftSideMenu from '../components/LeftSideMenu';
import Navbar from '../components/Navbar';
import posts from '../data/post'; 
import tagsData from '../data/tagsData'; 
import SearchableComboBox from '../components/SearchableComboBox';
import TagCard from '../components/TagCard';
import Pagination from '../components/Pagination'; 
import Footer from "../components/Footer";

function TagsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [tagData, setTagData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1); 
  const [postsPerPage] = useState(6);

  const countQuestionsForTag = (tag) => {
    return posts.filter(post => post.tags.includes(tag)).length;
  };

  
  useEffect(() => {
    const tagsWithCounts = tagsData.map(tag => ({
      ...tag, 
      questionCount: countQuestionsForTag(tag.name),
    }));

    setTagData(tagsWithCounts);
  }, []); 

  
  const filteredTags = tagData.filter(tag =>
    tag.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  
  const indexOfLastTag = currentPage * postsPerPage;
  const indexOfFirstTag = indexOfLastTag - postsPerPage;
  const currentTags = filteredTags.slice(indexOfFirstTag, indexOfLastTag);


  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <LeftSideMenu /> {/* Left Sidebar */}
      
      <div className="flex-1 p-8 ml-72 mt-16">
        {/* First Section - Heading and Description */}
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Tags</h1>
          <p className="mt-4 text-lg text-gray-600">
            A tag is a keyword or label that categorizes your question with other, similar questions. Using the right tags makes it easier for others to find and answer your question.
          </p>
        </div>
        
        {/* ComboBox Section */}
        <div className="mt-8">
          <SearchableComboBox
            items={tagData}
            value={searchQuery}
            onChange={setSearchQuery}
            placeholder="Search tags..."
          />
        </div>

        {/* Tags Cards */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {currentTags.map((tag, index) => (
            <TagCard key={index} tag={tag} />
          ))}
        </div>

        {/* Pagination */}
        <Pagination
          currentPage={currentPage}
          totalPosts={filteredTags.length}
          postsPerPage={postsPerPage}
          paginate={paginate}
        />
      </div>
      <Footer/>
    </div>
  );
}

export default TagsPage;
